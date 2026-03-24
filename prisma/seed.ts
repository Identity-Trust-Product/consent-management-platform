/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 *
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 *
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Roles } from "../lib/rbac";
import { seedSlaConfigurations } from "./seed-sla";

const prisma = new PrismaClient();

// Helper function to generate random timestamp within a day range
function randomTimeInDay(daysAgo: number): Date {
  const now = new Date();
  const targetDate = new Date(now);
  targetDate.setDate(targetDate.getDate() - daysAgo);

  // Set time between 9 AM and 6 PM IST
  const hour = 9 + Math.floor(Math.random() * 9); // 9-17 (5PM)
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);

  targetDate.setHours(hour, minute, second, 0);
  return targetDate;
}

// Helper to generate timestamps in order
function generateTimestamps(count: number, daysAgo: number): Date[] {
  const timestamps: Date[] = [];
  for (let i = 0; i < count; i++) {
    timestamps.push(randomTimeInDay(daysAgo));
  }
  return timestamps.sort((a, b) => a.getTime() - b.getTime());
}

async function main() {
  console.log("Setting up RBAC system...");

  // Create roles
  const adminRole = await prisma.role.upsert({
    where: { name: Roles.PRIVY_CGP_ADMIN },
    update: {},
    create: {
      name: Roles.PRIVY_CGP_ADMIN,
      description: "Administrator role with full system access",
    },
  });

  const userRole = await prisma.role.upsert({
    where: { name: Roles.PRIVY_CGP_USER },
    update: {},
    create: {
      name: Roles.PRIVY_CGP_USER,
      description: "Standard user role with limited access",
    },
  });

  const apiKeyManagerRole = await prisma.role.upsert({
    where: { name: Roles.PRIVY_API_KEY_MANAGER },
    update: {},
    create: {
      name: Roles.PRIVY_API_KEY_MANAGER,
      description:
        "API Key Manager role with access to create and manage API keys",
    },
  });

  const grievanceAgentRole = await prisma.role.upsert({
    where: { name: Roles.PRIVY_CGP_GRIEVANCE_AGENT },
    update: {},
    create: {
      name: Roles.PRIVY_CGP_GRIEVANCE_AGENT,
      description:
        "Grievance Agent role with access to manage and resolve user grievances",
    },
  });

  const dpoRole = await prisma.role.upsert({
    where: { name: Roles.PRIVY_DATA_PROTECTION_OFFICER },
    update: {},
    create: {
      name: Roles.PRIVY_DATA_PROTECTION_OFFICER,
      description:
        "Data Protection Officer role with oversight and compliance access",
    },
  });

  const auditorRole = await prisma.role.upsert({
    where: { name: Roles.PRIVY_AUDITOR },
    update: {},
    create: {
      name: Roles.PRIVY_AUDITOR,
      description:
        "Auditor role with read-only access for verification and compliance",
    },
  });

  // Cookie Manager Roles (managed from this service, used by Cookie Manager)
  const cmEditorRole = await prisma.role.upsert({
    where: { name: Roles.PRIVY_CM_EDITOR },
    update: {},
    create: {
      name: Roles.PRIVY_CM_EDITOR,
      description: "Cookie Manager Editor",
    },
  });

  const cmAdminRole = await prisma.role.upsert({
    where: { name: Roles.PRIVY_CM_ADMIN },
    update: {},
    create: {
      name: Roles.PRIVY_CM_ADMIN,
      description: "Cookie Manager Administrator",
    },
  });

  const cmScanOperatorRole = await prisma.role.upsert({
    where: { name: Roles.PRIVY_CM_SCAN_OPERATOR },
    update: {},
    create: {
      name: Roles.PRIVY_CM_SCAN_OPERATOR,
      description: "Cookie Scan Accessor",
    },
  });

  console.log("Created roles:", {
    adminRole,
    userRole,
    apiKeyManagerRole,
    grievanceAgentRole,
    dpoRole,
    auditorRole,
    cmEditorRole,
    cmAdminRole,
    cmScanOperatorRole,
  });

  // Create a default admin user if none exists
  const existingAdminUser = await prisma.user.findFirst({
    include: {
      userRoles: {
        include: {
          role: true,
        },
      },
    },
  });

  if (
    !existingAdminUser ||
    !existingAdminUser.userRoles.some(
      (ur) => ur.role.name === Roles.PRIVY_CGP_ADMIN,
    )
  ) {
    let adminUser = existingAdminUser;

    if (!adminUser) {
      const hashedPassword = await bcrypt.hash("tech.idfy", 10);
      const newUser = await prisma.user.create({
        data: {
          name: "IDfy Tech",
          email: "tech.idfy@idfy.com",
          password: hashedPassword,
        },
      });
      console.log("Created admin user:", newUser.email);
      adminUser = {
        ...newUser,
        userRoles: [],
      };
    }

    // Assign admin role
    await prisma.userRole.upsert({
      where: {
        userId_roleId: {
          userId: adminUser.id,
          roleId: adminRole.id,
        },
      },
      update: {},
      create: {
        userId: adminUser.id,
        roleId: adminRole.id,
      },
    });

    console.log("Assigned admin role to user:", adminUser.email);
  }

  console.log("RBAC setup completed!");

  // Seed Business Units
  console.log("Seeding business units...");

  const businessUnits = [
    { name: "Marketing Department", code: "MKT001", active: true },
    { name: "Human Resources", code: "HR002", active: true },
    { name: "Information Technology", code: "IT003", active: true },
    { name: "Finance & Accounting", code: "FIN004", active: true },
    { name: "Sales Operations", code: "SAL005", active: true },
    { name: "Customer Support", code: "CS006", active: true },
    { name: "Research & Development", code: "RND007", active: true },
    { name: "Legal Affairs", code: "LEG008", active: false },
    { name: "Operations Management", code: "OPS009", active: true },
    { name: "Quality Assurance", code: "QA010", active: true },
  ];

  for (const unit of businessUnits) {
    await prisma.businessUnit.upsert({
      where: { code: unit.code },
      update: {},
      create: unit,
    });
  }

  console.log(`Seeded ${businessUnits.length} business units`);

  // Seed User Attributes
  console.log("Seeding user attributes...");

  const userAttributes = [
    {
      name: "Email Address",
      pii: true,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Email Address",
          description: "User's email address",
          placeholder: "Enter your email",
        },
        hi: {
          name: "ईमेल पता",
          description: "उपयोगकर्ता का ईमेल पता",
          placeholder: "अपना ईमेल दर्ज करें",
        },
      },
    },
    {
      name: "Aadhar Card",
      pii: true,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Aadhar Card",
          description: "12-digit unique identification number",
          placeholder: "Enter your Aadhar number",
        },
        hi: {
          name: "आधार कार्ड",
          description: "12 अंकों की विशिष्ट पहचान संख्या",
          placeholder: "अपना आधार नंबर दर्ज करें",
        },
      },
    },
    {
      name: "Driving Licence",
      pii: true,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Driving Licence",
          description: "Government-issued driving license",
          placeholder: "Enter your driving license number",
        },
        hi: {
          name: "ड्राइविंग लाइसेंस",
          description: "सरकार द्वारा जारी ड्राइविंग लाइसेंस",
          placeholder: "अपना ड्राइविंग लाइसेंस नंबर दर्ज करें",
        },
      },
    },
    {
      name: "Full Name",
      pii: true,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Full Name",
          description: "User's complete legal name",
          placeholder: "Enter your full name",
        },
        hi: {
          name: "पूरा नाम",
          description: "उपयोगकर्ता का पूर्ण कानूनी नाम",
          placeholder: "अपना पूरा नाम दर्ज करें",
        },
      },
    },
    {
      name: "Mobile Number",
      pii: true,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Mobile Number",
          description: "User's mobile phone number",
          placeholder: "Enter your mobile number",
        },
        hi: {
          name: "मोबाइल नंबर",
          description: "उपयोगकर्ता का मोबाइल फोन नंबर",
          placeholder: "अपना मोबाइल नंबर दर्ज करें",
        },
      },
    },
    {
      name: "Pan Card",
      pii: true,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "PAN Card",
          description: "Permanent Account Number for tax purposes",
          placeholder: "Enter your PAN number",
        },
        hi: {
          name: "पैन कार्ड",
          description: "कर उद्देश्यों के लिए स्थायी खाता संख्या",
          placeholder: "अपना पैन नंबर दर्ज करें",
        },
      },
    },
    {
      name: "Date of Birth",
      pii: true,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Date of Birth",
          description: "User's birth date",
          placeholder: "Select your date of birth",
        },
        hi: {
          name: "जन्म तिथि",
          description: "उपयोगकर्ता की जन्म तिथि",
          placeholder: "अपनी जन्म तिथि चुनें",
        },
      },
    },
    {
      name: "Preferred Language",
      pii: false,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Preferred Language",
          description: "User's language preference",
          placeholder: "Select your preferred language",
        },
        hi: {
          name: "पसंदीदा भाषा",
          description: "उपयोगकर्ता की भाषा प्राथमिकता",
          placeholder: "अपनी पसंदीदा भाषा चुनें",
        },
      },
    },
    {
      name: "Device Type",
      pii: false,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Device Type",
          description: "Type of device used (mobile/desktop)",
          placeholder: "Device type",
        },
        hi: {
          name: "डिवाइस प्रकार",
          description: "उपयोग किया गया उपकरण का प्रकार (मोबाइल/डेस्कटॉप)",
          placeholder: "डिवाइस प्रकार",
        },
      },
    },
    {
      name: "Browser Information",
      pii: false,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Browser Information",
          description: "Web browser type and version",
          placeholder: "Browser info",
        },
        hi: {
          name: "ब्राउज़र जानकारी",
          description: "वेब ब्राउज़र प्रकार और संस्करण",
          placeholder: "ब्राउज़र जानकारी",
        },
      },
    },
    {
      name: "Time Zone",
      pii: false,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Time Zone",
          description: "User's time zone preference",
          placeholder: "Select your time zone",
        },
        hi: {
          name: "समय क्षेत्र",
          description: "उपयोगकर्ता की समय क्षेत्र प्राथमिकता",
          placeholder: "अपना समय क्षेत्र चुनें",
        },
      },
    },
    {
      name: "Product Category Preference",
      pii: false,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Product Category Preference",
          description: "User's product category preferences",
          placeholder: "Select preferred categories",
        },
        hi: {
          name: "उत्पाद श्रेणी प्राथमिकता",
          description: "उपयोगकर्ता की उत्पाद श्रेणी प्राथमिकताएं",
          placeholder: "पसंदीदा श्रेणियां चुनें",
        },
      },
    },
    {
      name: "Communication Channel Preference",
      pii: false,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Communication Channel Preference",
          description: "Preferred communication method (email/SMS/push)",
          placeholder: "Select communication preference",
        },
        hi: {
          name: "संचार चैनल प्राथमिकता",
          description: "पसंदीदा संचार विधि (ईमेल/एसएमएस/पुश)",
          placeholder: "संचार प्राथमिकता चुनें",
        },
      },
    },
    {
      name: "Account Status",
      pii: false,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Account Status",
          description: "Current account status (active/inactive)",
          placeholder: "Account status",
        },
        hi: {
          name: "खाता स्थिति",
          description: "वर्तमान खाता स्थिति (सक्रिय/निष्क्रिय)",
          placeholder: "खाता स्थिति",
        },
      },
    },
    {
      name: "Subscription Plan",
      pii: false,
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Subscription Plan",
          description: "User's subscription plan type",
          placeholder: "Select subscription plan",
        },
        hi: {
          name: "सदस्यता योजना",
          description: "उपयोगकर्ता की सदस्यता योजना प्रकार",
          placeholder: "सदस्यता योजना चुनें",
        },
      },
    },
  ];

  for (const attribute of userAttributes) {
    await prisma.userAttribute.upsert({
      where: { name: attribute.name },
      update: {},
      create: attribute,
    });
  }

  console.log(`Seeded ${userAttributes.length} user attributes`);

  // Seed Purposes of Processing
  console.log("Seeding purposes of processing...");

  const purposesOfProcessing = [
    {
      name: "Marketing and Advertising",
      code: "MAR001",
      description:
        "Processing personal data for marketing campaigns, advertising, and promotional activities",
    },
    {
      name: "Customer Service Support",
      code: "CST001",
      description:
        "Processing data to provide customer support, handle inquiries, and resolve issues",
    },
    {
      name: "Service Delivery",
      code: "SRV001",
      description:
        "Processing data necessary for the delivery of products or services to customers",
    },
    {
      name: "Account Management",
      code: "ACC001",
      description:
        "Processing data for user account creation, maintenance, and management",
    },
    {
      name: "Payment Processing",
      code: "PAY001",
      description:
        "Processing financial data for payment transactions and billing purposes",
    },
    {
      name: "Legal Compliance",
      code: "LEG001",
      description:
        "Processing data to comply with legal obligations and regulatory requirements",
    },
    {
      name: "Fraud Prevention",
      code: "FRD001",
      description:
        "Processing data to detect, prevent, and investigate fraudulent activities",
    },
    {
      name: "Analytics and Research",
      code: "ANA001",
      description:
        "Processing data for business analytics, research, and performance improvement",
    },
    {
      name: "Security Monitoring",
      code: "SEC001",
      description:
        "Processing data for security monitoring, threat detection, and system protection",
    },
    {
      name: "Product Development",
      code: "PRD001",
      description:
        "Processing data for product development, testing, and enhancement purposes",
    },
  ];

  for (const purpose of purposesOfProcessing) {
    await prisma.purposeOfProcessing.upsert({
      where: { code: purpose.code },
      update: {},
      create: purpose,
    });
  }

  console.log(`Seeded ${purposesOfProcessing.length} purposes of processing`);

  // Seed Data Processors
  console.log("Seeding data processors...");

  const dataProcessors = [
    {
      ouId: "DP001",
      legalName: "CloudTech Solutions Private Limited",
      brandName: "CloudTech",
      cin: "U72900DL2020PTC372345",
      industry: "Information Technology",
      active: true,
    },
    {
      ouId: "DP002",
      legalName: "Analytics India Corporation",
      brandName: "AnalyticsPro",
      cin: "U72200MH2019PLC345678",
      industry: "Data Analytics",
      active: true,
    },
    {
      ouId: "DP003",
      legalName: "SecurePayments Technology Limited",
      brandName: "SecurePay",
      cin: "U65999KA2021PTC456789",
      industry: "Financial Services",
      active: true,
    },
    {
      ouId: "DP004",
      legalName: "Marketing Automation Systems",
      brandName: "AutoMarketing",
      cin: "U74999TN2018PLC567890",
      industry: "Marketing Technology",
      active: true,
    },
    {
      ouId: "DP005",
      legalName: "Customer Support Solutions India",
      brandName: "SupportMax",
      cin: "U72300HR2020PTC678901",
      industry: "Customer Service",
      active: false,
    },
    {
      ouId: "DP006",
      legalName: "Logistics Data Management Private Limited",
      brandName: "LogiData",
      cin: "U63032GJ2019PTC789012",
      industry: "Logistics & Supply Chain",
      active: true,
    },
    {
      ouId: "DP007",
      legalName: "Healthcare Information Systems",
      brandName: "HealthIS",
      cin: "U85100WB2021PLC890123",
      industry: "Healthcare Technology",
      active: true,
    },
    {
      ouId: "DP008",
      legalName: "Education Technology Partners",
      brandName: "EduTech Partners",
      cin: "U80903UP2020PTC901234",
      industry: "Education Technology",
      active: true,
    },
  ];

  for (const processor of dataProcessors) {
    await prisma.dataProcessor.upsert({
      where: { ouId: processor.ouId },
      update: {},
      create: processor,
    });
  }

  console.log(`Seeded ${dataProcessors.length} data processors`);

  // Seed Business Processes
  console.log("Seeding business processes...");

  const businessProcesses = [
    {
      name: "Bank Account Opening",
      code: "LqmsILnzb8",
      version: 1,
      status: "published",
      grantDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      revokeDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      reconsentDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      defaultLanguage: "en",
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Bank Account Opening",
          grantDescription:
            "We request your consent to collect and process your personal information for opening a bank account. This includes verifying your identity, assessing eligibility, and complying with regulatory requirements.",
          revokeDescription:
            "You can revoke your consent for us to process your personal information for bank account services. This may result in closure of your account.",
          reconsentDescription:
            "We need to update your consent preferences for processing your personal information related to your bank account services.",
        },
        hi: {
          name: "बैंक खाता खोलना",
          grantDescription:
            "हम बैंक खाता खोलने के लिए आपकी व्यक्तिगत जानकारी एकत्र करने और संसाधित करने के लिए आपकी सहमति का अनुरोध करते हैं। इसमें आपकी पहचान सत्यापित करना, पात्रता का आकलन करना और नियामक आवश्यकताओं का अनुपालन करना शामिल है।",
          revokeDescription:
            "आप बैंक खाता सेवाओं के लिए अपनी व्यक्तिगत जानकारी संसाधित करने के लिए अपनी सहमति वापस ले सकते हैं। इसके परिणामस्वरूप आपका खाता बंद हो सकता है।",
          reconsentDescription:
            "हमें आप̦की बैंक खाता सेवाओं से संबंधित व्यक्तिगत जानकारी के प्रसंस्करण के लिए आपकी सहमति प्राथमिकताओं को अपडेट करने की आवश्यकता है।",
        },
      },
      legalDocuments: {
        "DPO Contact": "https://www.example.com/dpo-contact",
        "Privacy Policy": "https://www.example.com/privacy-policy",
        "Terms of Service": "https://www.example.com/terms-of-service",
      },
      creationType: "manual",
      createdBy: "tech@idfy.com",
      publishedAt: new Date(),
      businessUnitId: 4, // Finance & Accounting
    },
  ];

  for (const process of businessProcesses) {
    await prisma.businessProcess.upsert({
      where: { code_version: { code: process.code, version: process.version } },
      update: {},
      create: process,
    });
  }

  console.log(`Seeded ${businessProcesses.length} business processes`);

  // Seed Consent Purposes
  console.log("Seeding consent purposes...");

  const consentPurposes = [
    {
      name: "KYC",
      code: "WD1b1u1SVu",
      version: 1,
      status: "published",
      description: "Data collection for KYC",
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "KYC (Know Your Customer)",
          description:
            "Collection and verification of your personal information to comply with identity verification and anti-money laundering regulations.",
        },
        hi: {
          name: "केवाईसी (अपने ग्राहक को जानें)",
          description:
            "पहचान सत्यापन और धन शोधन रोधी नियमों का अनुपालन करने के लिए आपकी व्यक्तिगत जानकारी का संग्रह और सत्यापन।",
        },
      },
      publishedAt: new Date(),
      createdBy: "tech@idfy.com",
    },
    {
      name: "Credit Assessment",
      code: "zUylmpzsUP",
      version: 1,
      status: "published",
      description: "Data Collection for Credit Assessment",
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Credit Assessment",
          description:
            "Analysis of your financial information to determine creditworthiness and eligibility for financial products and services.",
        },
        hi: {
          name: "क्रेडिट मूल्यांकन",
          description:
            "वित्तीय उत्पादों और सेवाओं के लिए साख और पात्रता निर्धारित करने के लिए आपकी वित्तीय जानकारी का विश्लेषण।",
        },
      },
      publishedAt: new Date(),
      createdBy: "tech@idfy.com",
    },
  ];

  const createdConsentPurposes = [];
  for (const purpose of consentPurposes) {
    const created = await prisma.consentPurpose.upsert({
      where: { code_version: { code: purpose.code, version: purpose.version } },
      update: {},
      create: purpose,
    });
    createdConsentPurposes.push(created);
  }

  console.log(`Seeded ${consentPurposes.length} consent purposes`);

  // Seed Processing Purposes
  console.log("Seeding processing purposes...");

  // Find the IDs of the created consent purposes
  const kycConsentPurpose = createdConsentPurposes.find(
    (cp) => cp.code === "WD1b1u1SVu",
  );
  const creditAssessmentConsentPurpose = createdConsentPurposes.find(
    (cp) => cp.code === "zUylmpzsUP",
  );

  const processingPurposes = [
    {
      name: "Fraud Prevention",
      status: "published",
      consentPurposeId: kycConsentPurpose!.id,
      purposeOfProcessingId: 7, // Fraud Prevention
      userAttributeNames: [
        "Date of Birth",
        "Driving Licence",
        "Email Address",
        "Full Name",
        "Aadhar Card",
      ],
      description:
        "Processing data to detect, prevent, and investigate fraudulent activities",
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Fraud Prevention",
          description:
            "Processing your personal data to detect, prevent, and investigate fraudulent activities and protect you from identity theft and financial crimes.",
        },
        hi: {
          name: "धोखाधड़ी रोकथाम",
          description:
            "धोखाधड़ी गतिविधियों का पता लगाने, रोकने और जांच करने और आपको पहचान की चोरी और वित्तीय अपराधों से बचाने के लिए आपके व्यक्तिगत डेटा का प्रसंस्करण।",
        },
      },
      createdBy: "tech@idfy.com",
    },
    {
      name: "Security Monitoring",
      status: "published",
      consentPurposeId: kycConsentPurpose!.id,
      purposeOfProcessingId: 9, // Security Monitoring
      userAttributeNames: [
        "Browser Information",
        "Device Type",
        "Email Address",
      ],
      description:
        "Processing data for security monitoring, threat detection, and system protection",
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Security Monitoring",
          description:
            "Monitoring and analyzing your account activity to detect suspicious behavior, prevent unauthorized access, and ensure the security of your data.",
        },
        hi: {
          name: "सुरक्षा निगरानी",
          description:
            "संदिग्ध व्यवहार का पता लगाने, अनधिकृत पहुंच को रोकने और आपके डेटा की सुरक्षा सुनिश्चित करने के लिए आपकी खाता गतिविधि की निगरानी और विश्लेषण।",
        },
      },
      createdBy: "tech@idfy.com",
    },
    {
      name: "Service Delivery",
      status: "published",
      consentPurposeId: kycConsentPurpose!.id,
      purposeOfProcessingId: 3, // Service Delivery
      userAttributeNames: [
        "Communication Channel Preference",
        "Browser Information",
        "Device Type",
        "Email Address",
      ],
      description:
        "Processing data necessary for the delivery of products or services to customers",
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Service Delivery",
          description:
            "Processing your information to provide, maintain, and improve our services, and to deliver products or services you have requested.",
        },
        hi: {
          name: "सेवा वितरण",
          description:
            "हमारी सेवाएं प्रदान करने, बनाए रखने और सुधारने के लिए, और आपके द्वारा अनुरोधित उत्पादों या सेवाओं को वितरित करने के लिए आपकी जानकारी का प्रसंस्करण।",
        },
      },
      createdBy: "tech@idfy.com",
    },
    {
      name: "Payment Processing",
      status: "published",
      consentPurposeId: creditAssessmentConsentPurpose!.id,
      purposeOfProcessingId: 5, // Payment Processing
      userAttributeNames: [
        "Account Status",
        "Email Address",
        "Full Name",
        "Date of Birth",
      ],
      description:
        "Processing financial data for payment transactions and billing purposes",
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Payment Processing",
          description:
            "Processing your financial and payment information to complete transactions, process payments, and manage billing activities.",
        },
        hi: {
          name: "भुगतान प्रसंस्करण",
          description:
            "लेनदेन पूरा करने, भुगतान संसाधित करने और बिलिंग गतिविधियों को प्रबंधित करने के लिए आपकी वित्तीय और भुगतान जानकारी का प्रसंस्करण।",
        },
      },
      createdBy: "tech@idfy.com",
    },
    {
      name: "Customer Service Support",
      status: "published",
      consentPurposeId: creditAssessmentConsentPurpose!.id,
      purposeOfProcessingId: 2, // Customer Service Support
      userAttributeNames: [
        "Full Name",
        "Email Address",
        "Communication Channel Preference",
      ],
      description:
        "Processing data to provide customer support, handle inquiries, and resolve issues",
      supportedLanguages: ["en", "hi"],
      translations: {
        en: {
          name: "Customer Service Support",
          description:
            "Using your information to respond to your inquiries, provide technical assistance, and resolve any issues you may experience with our services.",
        },
        hi: {
          name: "ग्राहक सेवा सहायता",
          description:
            "आपकी पूछताछ का जवाब देने, तकनीकी सहायता प्रदान करने और हमारी सेवाओं के साथ आपके सामने आने वाली किसी भी समस्या को हल करने के लिए आपकी जानकारी का उपयोग।",
        },
      },
      createdBy: "tech@idfy.com",
    },
  ];

  for (const purpose of processingPurposes) {
    await prisma.processingPurpose.upsert({
      where: {
        consentPurposeId_purposeOfProcessingId: {
          consentPurposeId: purpose.consentPurposeId,
          purposeOfProcessingId: purpose.purposeOfProcessingId,
        },
      },
      update: {},
      create: purpose,
    });
  }

  console.log(`Seeded ${processingPurposes.length} processing purposes`);

  // Seed Business Process Rules
  console.log("Seeding business process rules...");

  // Get the business process ID
  const businessProcess = await prisma.businessProcess.findFirst({
    where: { code: "LqmsILnzb8" },
  });

  // Get the processing purpose IDs
  const fraudPrevention = await prisma.processingPurpose.findFirst({
    where: { name: "Fraud Prevention" },
  });
  const securityMonitoring = await prisma.processingPurpose.findFirst({
    where: { name: "Security Monitoring" },
  });
  const serviceDelivery = await prisma.processingPurpose.findFirst({
    where: { name: "Service Delivery" },
  });
  const paymentProcessing = await prisma.processingPurpose.findFirst({
    where: { name: "Payment Processing" },
  });
  const customerServiceSupport = await prisma.processingPurpose.findFirst({
    where: { name: "Customer Service Support" },
  });

  const businessProcessRules = [
    {
      mandatory: true,
      reconsentableByPrincipal: false,
      revocableByPrincipal: false,
      businessProcessId: businessProcess!.id,
      consentPurposeId: kycConsentPurpose!.id,
      processingPurposeId: fraudPrevention!.id,
      createdBy: "tech@idfy.com",
    },
    {
      mandatory: true,
      reconsentableByPrincipal: true,
      revocableByPrincipal: false,
      businessProcessId: businessProcess!.id,
      consentPurposeId: kycConsentPurpose!.id,
      processingPurposeId: securityMonitoring!.id,
      createdBy: "tech@idfy.com",
    },
    {
      mandatory: false,
      reconsentableByPrincipal: true,
      revocableByPrincipal: true,
      businessProcessId: businessProcess!.id,
      consentPurposeId: kycConsentPurpose!.id,
      processingPurposeId: serviceDelivery!.id,
      createdBy: "tech@idfy.com",
    },
    {
      mandatory: true,
      reconsentableByPrincipal: true,
      revocableByPrincipal: false,
      businessProcessId: businessProcess!.id,
      consentPurposeId: creditAssessmentConsentPurpose!.id,
      processingPurposeId: paymentProcessing!.id,
      createdBy: "tech@idfy.com",
    },
    {
      mandatory: false,
      reconsentableByPrincipal: true,
      revocableByPrincipal: true,
      businessProcessId: businessProcess!.id,
      consentPurposeId: creditAssessmentConsentPurpose!.id,
      processingPurposeId: customerServiceSupport!.id,
      createdBy: "tech@idfy.com",
    },
  ];

  for (const rule of businessProcessRules) {
    // Check if rule already exists
    const existingRule = await prisma.businessProcessRule.findFirst({
      where: {
        businessProcessId: rule.businessProcessId,
        consentPurposeId: rule.consentPurposeId,
        processingPurposeId: rule.processingPurposeId,
      },
    });

    if (!existingRule) {
      await prisma.businessProcessRule.create({
        data: rule,
      });
    }
  }

  console.log(`Seeded ${businessProcessRules.length} business process rules`);

  // Fetch the created rules with publicId for demo data seeding
  const createdBusinessProcessRules =
    await prisma.businessProcessRule.findMany();

  // Seed Business Process to Consent Purpose relationships
  console.log("Seeding business process to consent purpose relationships...");

  const businessProcessToConsentPurposes = [
    {
      businessProcessId: businessProcess!.id,
      consentPurposeId: kycConsentPurpose!.id,
      consentDuration: 8760, // 1 year in hours
    },
    {
      businessProcessId: businessProcess!.id,
      consentPurposeId: creditAssessmentConsentPurpose!.id,
      consentDuration: null, // No expiration
    },
  ];

  for (const relationship of businessProcessToConsentPurposes) {
    // Check if relationship already exists
    const existingRelationship =
      await prisma.businessProcessToConsentPurpose.findFirst({
        where: {
          businessProcessId: relationship.businessProcessId,
          consentPurposeId: relationship.consentPurposeId,
        },
      });

    if (!existingRelationship) {
      await prisma.businessProcessToConsentPurpose.create({
        data: relationship,
      });
    }
  }

  console.log(
    `Seeded ${businessProcessToConsentPurposes.length} business process to consent purpose relationships`,
  );

  // Seed Processing Purpose to Data Processor relationships
  console.log("Seeding processing purpose to data processor relationships...");

  const processingPurposeToDataProcessors = [
    {
      processingPurposeId: securityMonitoring!.id,
      dataProcessorId: "DP006", // LogiData
      status: "published",
      userAttributeNames: [
        "Browser Information",
        "Device Type",
        "Email Address",
      ],
      createdBy: "tech@idfy.com",
    },
    {
      processingPurposeId: paymentProcessing!.id,
      dataProcessorId: "DP001", // CloudTech
      status: "published",
      userAttributeNames: [
        "Account Status",
        "Email Address",
        "Full Name",
        "Date of Birth",
      ],
      createdBy: "tech@idfy.com",
    },
  ];

  for (const relationship of processingPurposeToDataProcessors) {
    // Check if relationship already exists
    const existingRelationship =
      await prisma.processingPurposeToDataProcessor.findFirst({
        where: {
          processingPurposeId: relationship.processingPurposeId,
          dataProcessorId: relationship.dataProcessorId,
        },
      });

    if (!existingRelationship) {
      await prisma.processingPurposeToDataProcessor.create({
        data: relationship,
      });
    }
  }

  console.log(
    `Seeded ${processingPurposeToDataProcessors.length} processing purpose to data processor relationships`,
  );

  // Seed SLA Configurations
  await seedSlaConfigurations();

  // ============================================================================
  //DEMO DATA SEEDING (Additional realistic data for presentations)
  // ============================================================================
  console.log("\n🎨 Seeding demo data for presentation...\n");

  // ============================================================================
  // 1. ADDITIONAL USERS
  // ============================================================================
  console.log("👥 Creating additional users...");

  const hashedPassword = await bcrypt.hash("demo123", 10);

  const additionalUsers = [
    {
      name: "Rajesh Kumar",
      email: "rajesh.kumar@example.com",
      role: Roles.PRIVY_CGP_GRIEVANCE_AGENT,
    },
    {
      name: "Priya Singh",
      email: "priya.singh@example.com",
      role: Roles.PRIVY_CGP_GRIEVANCE_AGENT,
    },
    {
      name: "Dr. Amit Verma",
      email: "amit.verma@example.com",
      role: Roles.PRIVY_DATA_PROTECTION_OFFICER,
    },
    {
      name: "Sneha Reddy",
      email: "sneha.reddy@example.com",
      role: Roles.PRIVY_AUDITOR,
    },
    {
      name: "Vikram Malhotra",
      email: "vikram.malhotra@example.com",
      role: Roles.PRIVY_API_KEY_MANAGER,
    },
    {
      name: "Hardik Garg",
      email: "hardik.garg@example.com",
      role: Roles.PRIVY_CGP_ADMIN,
    },
    {
      name: "Kedar Kulkarni",
      email: "kedar.kulkarni@example.com",
      role: Roles.PRIVY_CGP_ADMIN,
    },
    {
      name: "Dhanesh Tanak",
      email: "dhanesh.tanak@example.com",
      role: Roles.PRIVY_CGP_GRIEVANCE_AGENT,
    },
  ];

  const createdUsers: any[] = [];

  for (const userData of additionalUsers) {
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        emailVerified: randomTimeInDay(3),
      },
    });

    const role = await prisma.role.findUnique({
      where: { name: userData.role },
    });

    if (role) {
      await prisma.userRole.upsert({
        where: {
          userId_roleId: {
            userId: user.id,
            roleId: role.id,
          },
        },
        update: {},
        create: {
          userId: user.id,
          roleId: role.id,
          assignedAt: randomTimeInDay(3),
        },
      });
    }

    createdUsers.push({ ...user, roleName: userData.role });
  }

  console.log(`✅ Created ${createdUsers.length} additional users\n`);

  // Get all users for later use
  const allUsers = await prisma.user.findMany();
  const adminUser = allUsers[0];
  const grievanceAgents = createdUsers.filter(
    (u) =>
      u.roleName === Roles.PRIVY_CGP_GRIEVANCE_AGENT ||
      u.roleName === Roles.PRIVY_CGP_ADMIN,
  );

  // ============================================================================
  // 2. DATA PRINCIPALS (Mock IDs)
  // ============================================================================
  const dataPrincipals = [
    {
      id: "dp_arun_kumar_001",
      name: "Arun Kumar",
      email: "arun.kumar@example.com",
      phone: "+91-9876543210",
    },
    {
      id: "dp_priya_sharma_002",
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      phone: "+91-9876543211",
    },
    {
      id: "dp_rahul_gupta_003",
      name: "Rahul Gupta",
      email: "rahul.gupta@example.com",
      phone: "+91-9876543212",
    },
    {
      id: "dp_neha_agarwal_004",
      name: "Neha Agarwal",
      email: "neha.agarwal@example.com",
      phone: "+91-9876543213",
    },
    {
      id: "dp_vikram_singh_005",
      name: "Vikram Singh",
      email: "vikram.singh@example.com",
      phone: "+91-9876543214",
    },
    {
      id: "dp_anjali_mehta_006",
      name: "Anjali Mehta",
      email: "anjali.mehta@example.com",
      phone: "+91-9876543215",
    },
    {
      id: "dp_karan_patel_007",
      name: "Karan Patel",
      email: "karan.patel@example.com",
      phone: "+91-9876543216",
    },
    {
      id: "dp_divya_reddy_008",
      name: "Divya Reddy",
      email: "divya.reddy@example.com",
      phone: "+91-9876543217",
    },
    {
      id: "dp_rohan_joshi_009",
      name: "Rohan Joshi",
      email: "rohan.joshi@example.com",
      phone: "+91-9876543218",
    },
    {
      id: "dp_sneha_iyer_010",
      name: "Sneha Iyer",
      email: "sneha.iyer@example.com",
      phone: "+91-9876543219",
    },
  ];

  // ============================================================================
  // 3. GET EXISTING TAXONOMY DATA (reusing from above)
  // ============================================================================
  // businessProcess, kycConsentPurpose, creditConsentPurpose, processingPurposes,
  // and businessProcessRules are already defined above in the main seed

  // ============================================================================
  // 4. NOTICES
  // ============================================================================
  console.log("📧 Creating notices...");

  const notices: any[] = [];
  const noticeStatuses = ["pending", "submitted", "completed"];

  for (let i = 0; i < 35; i++) {
    const dp = dataPrincipals[i % dataPrincipals.length];
    const daysAgo = Math.floor(i / 9); // Distribute across 4 days
    const createdAt = randomTimeInDay(daysAgo);

    const status = i < 5 ? "pending" : "completed";
    const forMinor = i % 7 === 0;

    const referenceId = `REF${1000 + i}_DEMO_${dp.id.slice(-3)}`;

    let notice = await prisma.notice.findFirst({ where: { referenceId } });

    if (!notice) {
      notice = await prisma.notice.create({
        data: {
          dataPrincipalId: dp.id,
          businessProcessId: businessProcess.id,
          status,
          defaultLanguage: "en",
          creationMethod: "api",
          createdByUserId: adminUser.id,
          forMinor,
          referenceId,
          dataPrincipalSubmittedData: {
            fullName: dp.name,
            email: dp.email,
            phone: dp.phone,
            accountType: i % 2 === 0 ? "savings" : "current",
          },
          consentStatus: status === "completed" ? "accepted" : null,
          markCompletedTimestamp:
            status === "completed"
              ? new Date(createdAt.getTime() + 3600000)
              : null,
          createdAt,
          updatedAt: createdAt,
        },
      });
    }

    notices.push(notice);
  }

  console.log(`✅ Created ${notices.length} notices\n`);

  // ============================================================================
  // 4.1. NOTICE METADATA
  // ============================================================================
  console.log("📝 Creating notice metadata...");

  const noticeMetadataEntries = [
    { key: "source", value: "web_portal" },
    { key: "source", value: "mobile_app" },
    { key: "source", value: "api" },
    { key: "device_type", value: "desktop" },
    { key: "device_type", value: "mobile" },
    { key: "device_type", value: "tablet" },
    { key: "ip_address", value: "192.168.1.1" },
    { key: "ip_address", value: "10.0.0.1" },
    { key: "user_agent", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
    { key: "user_agent", value: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0)" },
    { key: "location", value: "Mumbai, India" },
    { key: "location", value: "Delhi, India" },
    { key: "location", value: "Bangalore, India" },
    { key: "campaign_id", value: "CAMP_2024_Q4" },
    { key: "campaign_id", value: "CAMP_2024_Q3" },
    { key: "referrer", value: "https://www.google.com" },
    { key: "referrer", value: "https://www.facebook.com" },
    { key: "session_id", value: "sess_abc123" },
    { key: "consent_method", value: "explicit" },
    { key: "consent_method", value: "implicit" },
  ];

  let noticeMetadataCount = 0;
  for (let i = 0; i < notices.length; i++) {
    const notice = notices[i];
    // Add 2-4 metadata entries per notice, deterministic count
    const metadataCount = 2 + (i % 3);

    for (let j = 0; j < metadataCount; j++) {
      const metadata =
        noticeMetadataEntries[(i + j) % noticeMetadataEntries.length];

      const existing = await prisma.noticeMetadata.findFirst({
        where: {
          noticeId: notice.id,
          key: metadata.key,
          value: metadata.value,
        },
      });

      if (!existing) {
        await prisma.noticeMetadata.create({
          data: {
            noticeId: notice.id,
            key: metadata.key,
            value: metadata.value,
          },
        });
        noticeMetadataCount++;
      }
    }
  }

  console.log(`✅ Created ${noticeMetadataCount} notice metadata entries\n`);

  // ============================================================================
  // 5. CONSENTS
  // ============================================================================
  console.log("✅ Creating consents...");

  const consents: any[] = [];

  for (let i = 0; i < 45; i++) {
    const dp = dataPrincipals[i % dataPrincipals.length];
    const daysAgo = Math.floor(i / 11); // Distribute across 4 days
    const rule =
      createdBusinessProcessRules[i % createdBusinessProcessRules.length];

    const createdAt = randomTimeInDay(daysAgo);
    const isRevoked = i % 8 === 0;
    const isExpired = i % 13 === 0 && !isRevoked;

    const status = isRevoked ? "revoked" : "accepted";
    const expiresAt = isExpired
      ? new Date(createdAt.getTime() + 86400000)
      : new Date(createdAt.getTime() + 31536000000); // 1 day or 1 year

    // Get the related entities with their publicIds
    const relatedBP = await prisma.businessProcess.findUnique({
      where: { id: rule.businessProcessId },
    });
    const relatedCP = await prisma.consentPurpose.findUnique({
      where: { id: rule.consentPurposeId },
    });
    const relatedPP = await prisma.processingPurpose.findUnique({
      where: { id: rule.processingPurposeId },
    });
    const relatedBU = relatedBP
      ? await prisma.businessUnit.findUnique({
        where: { id: relatedBP.businessUnitId },
      })
      : null;

    if (!relatedBP || !relatedCP || !relatedPP || !relatedBU) {
      console.warn(`Skipping consent ${i} due to missing related entities`);
      continue;
    }

    const requestId = `REQ${10000 + i}_DEMO_${dp.id.slice(-5)}`;

    let consent = await prisma.consent.findFirst({ where: { requestId } });

    if (!consent) {
      consent = await prisma.consent.create({
        data: {
          dataPrincipalId: dp.id,
          requestId,
          requestType: "consent_grant",
          referenceId:
            notices[i % notices.length]?.referenceId || `REF_CONSENT_DEMO_${i}`,
          businessProcessId: relatedBP.publicId,
          consentPurposeId: relatedCP.publicId,
          processingPurposeId: relatedPP.publicId,
          businessProcessRuleId: rule.publicId,
          businessUnitId: relatedBU.publicId,
          userAttributeNames: relatedPP.userAttributeNames,
          language: "en",
          status,
          isExpired,
          expiresAt: isExpired ? new Date(Date.now() - 86400000) : expiresAt,
          insertedAt: createdAt,
          updatedAt: createdAt,
        },
      });
    }

    consents.push(consent);
  }

  console.log(`✅ Created ${consents.length} consents\n`);

  // ============================================================================
  // 6. CONSENT AUDIT TRAIL
  // ============================================================================
  console.log("📜 Creating consent audit trails...");

  let auditCount = 0;

  for (const consent of consents) {
    // Check if trails exist
    const existingTrails = await prisma.consentAuditTrail.count({
      where: { consentId: consent.publicId },
    });
    if (existingTrails > 0) continue;

    // GRANTED event
    await prisma.consentAuditTrail.create({
      data: {
        consentId: consent.publicId,
        dataPrincipalId: consent.dataPrincipalId,
        action: "GRANTED",
        actor: "data_principal",
        timestamp: consent.insertedAt,
        details: {
          consentPurpose: consent.consentPurposeId,
          processingPurpose: consent.processingPurposeId,
        },
      },
    });
    auditCount++;

    // REVOKED event
    if (consent.status === "revoked") {
      await prisma.consentAuditTrail.create({
        data: {
          consentId: consent.publicId,
          dataPrincipalId: consent.dataPrincipalId,
          action: "REVOKED",
          actor: "data_principal",
          timestamp: new Date(consent.insertedAt.getTime() + 172800000), // 2 days later
          details: {
            reason: "User requested data deletion",
          },
        },
      });
      auditCount++;
    }

    // EXPIRED event
    if (consent.isExpired) {
      await prisma.consentAuditTrail.create({
        data: {
          consentId: consent.publicId,
          dataPrincipalId: consent.dataPrincipalId,
          action: "EXPIRED",
          actor: "system",
          timestamp: consent.expiresAt || new Date(),
          details: {
            expirationDate: consent.expiresAt,
          },
        },
      });
      auditCount++;
    }
  }

  console.log(`✅ Created ${auditCount} consent audit trail entries\n`);

  // ============================================================================
  // 7. PRINCIPAL ACTIVITY LOGS
  // ============================================================================
  console.log("📊 Creating principal activity logs...");

  const activityEvents = [
    "NOTICE_VIEWED",
    "CONSENT_GRANTED",
    "CONSENT_REVOKED",
    "PROFILE_VIEWED",
    "GRIEVANCE_SUBMITTED",
    "CONSENT_LIST_VIEWED",
  ];

  let activityCount = 0;

  for (let day = 0; day < 4; day++) {
    const timestamps = generateTimestamps(25, day);

    for (let i = 0; i < 25; i++) {
      const dp = dataPrincipals[i % dataPrincipals.length];
      const sessionId = `session_${dp.id}_${day}_${Math.floor(i / 5)}`;
      const eventType = activityEvents[i % activityEvents.length];

      const existing = await prisma.principalActivityLog.findFirst({
        where: { sessionId, eventType, dataPrincipalId: dp.id },
      });

      if (!existing) {
        await prisma.principalActivityLog.create({
          data: {
            dataPrincipalId: dp.id,
            sessionId,
            eventType,
            createdAt: timestamps[i],
            updatedAt: timestamps[i],
          },
        });
        activityCount++;
      }
    }
  }

  console.log(`✅ Created ${activityCount} principal activity logs\n`);

  // ============================================================================
  // 8. AUDIT LOGS
  // ============================================================================
  console.log("🔍 Creating system audit logs...");

  const auditActions = [
    { action: "CREATE", resource: "BUSINESS_PROCESS" },
    { action: "UPDATE", resource: "BUSINESS_PROCESS" },
    { action: "CREATE", resource: "CONSENT_PURPOSE" },
    { action: "CREATE", resource: "USER" },
    { action: "DELETE", resource: "USER" },
    { action: "LOGIN", resource: "SESSION" },
    { action: "CREATE", resource: "CONSENT" },
    { action: "UPDATE", resource: "CONSENT" },
    { action: "CREATE", resource: "GRIEVANCE" },
    { action: "UPDATE", resource: "GRIEVANCE" },
  ];

  let auditLogCount = 0;

  for (let day = 0; day < 4; day++) {
    const timestamps = generateTimestamps(50, day);

    for (let i = 0; i < 50; i++) {
      const user = allUsers[i % allUsers.length];
      const auditAction = auditActions[i % auditActions.length];
      const isSuccess = i % 10 !== 0; // 10% failure rate
      const resourceId = `${auditAction.resource.toLowerCase()}_${1000 + i}`;

      const existing = await prisma.auditLog.findFirst({
        where: { resourceId, action: auditAction.action },
      });

      if (!existing) {
        await prisma.auditLog.create({
          data: {
            performedByUserId:
              auditAction.action === "LOGIN"
                ? user.id
                : i % 3 === 0
                  ? null
                  : user.id,
            action: auditAction.action,
            resource: auditAction.resource,
            resourceId,
            payload: {
              input: `Sample ${auditAction.action} payload`,
            },
            result: isSuccess
              ? {
                success: true,
                data: `${auditAction.resource} processed`,
              }
              : null,
            metadata: {
              ip: `192.168.1.${10 + (i % 245)}`,
              userAgent:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            },
            status: isSuccess ? "SUCCESS" : "FAILURE",
            failureReason: !isSuccess ? "Validation error" : null,
            createdAt: timestamps[i],
          },
        });
        auditLogCount++;
      }
    }
  }

  console.log(`✅ Created ${auditLogCount} audit logs\n`);

  // ============================================================================
  // 9. GRIEVANCES
  // ============================================================================
  console.log("🎫 Creating grievances...");

  const grievanceCategories = [
    "CONSENT_UPDATE",
    "WITHDRAW_CONSENT",
    "ERASE_DATA",
    "PROCESSING_PURPOSE_ENQUIRY",
    "REPORT_BREACH",
    "REVIEW_REQUEST",
  ];

  const grievanceStatuses = [
    "SUBMITTED",
    "ASSIGNED",
    "IN_PROGRESS",
    "RESOLVED",
    "CLOSED",
    "REOPENED",
  ];

  const severities = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];

  const grievances: any[] = [];

  for (let i = 0; i < 18; i++) {
    const dp = dataPrincipals[i % dataPrincipals.length];
    const daysAgo = Math.floor(i / 5);
    const createdAt = randomTimeInDay(daysAgo);

    const category = grievanceCategories[i % grievanceCategories.length] as any;
    const severity = severities[i % severities.length] as any;

    // Determine status based on age
    let status: any;
    if (daysAgo >= 3) {
      status = i % 2 === 0 ? "CLOSED" : "RESOLVED";
    } else if (daysAgo >= 2) {
      status = i % 3 === 0 ? "IN_PROGRESS" : "ASSIGNED";
    } else {
      status = "SUBMITTED";
    }

    const assignedTo =
      status !== "SUBMITTED"
        ? grievanceAgents[i % grievanceAgents.length]
        : null;
    const resolvedAt =
      status === "RESOLVED" || status === "CLOSED"
        ? new Date(createdAt.getTime() + 86400000)
        : null;
    const closedAt =
      status === "CLOSED" ? new Date(createdAt.getTime() + 172800000) : null;

    // Check if Grievance exists
    let grievance = await prisma.grievance.findFirst({
      where: {
        dataPrincipalId: dp.id,
        category,
        businessProcessId: businessProcess.id,
      },
    });

    if (!grievance) {
      grievance = await prisma.grievance.create({
        data: {
          dataPrincipalId: dp.id,
          businessProcessId: businessProcess.id,
          category,
          severity,
          status,
          subject: `${category.replace(/_/g, " ")} - ${dp.name}`,
          description: `I would like to ${category.toLowerCase().replace(/_/g, " ")} for my account. Please assist me with this request.`,
          metadata: {
            name: dp.name,
            email: dp.email,
            phone: dp.phone,
          },
          assignedToId: assignedTo?.id,
          resolvedAt,
          closedAt,
          agentLastSeenAt: assignedTo
            ? new Date(createdAt.getTime() + 3600000)
            : null,
          principalLastSeenAt: createdAt,
          feedback:
            status === "CLOSED" && i % 2 === 0
              ? {
                rating: 4 + (i % 2),
                comment: "Very helpful and resolved quickly!",
                submittedAt: closedAt,
              }
              : null,
          createdAt,
          updatedAt: closedAt || resolvedAt || createdAt,
        },
      });
    }

    grievances.push(grievance);
  }

  console.log(`✅ Created ${grievances.length} grievances\n`);

  // ============================================================================
  // 10. GRIEVANCE AUDIT LOGS
  // ============================================================================
  console.log("📝 Creating grievance audit logs...");

  let grievanceAuditCount = 0;

  for (const grievance of grievances) {
    const auditCount = await prisma.grievanceAuditLog.count({
      where: { grievanceId: grievance.id },
    });
    if (auditCount > 0) continue;

    // Created event
    await prisma.grievanceAuditLog.create({
      data: {
        grievanceId: grievance.id,
        action: "CREATED_BY_PRINCIPAL",
        details: {
          category: grievance.category,
          severity: grievance.severity,
        },
        performedByUserId: null,
        createdAt: grievance.createdAt,
      },
    });
    grievanceAuditCount++;

    // Assigned event
    if (grievance.assignedToId) {
      const assignedUser = await prisma.user.findUnique({
        where: { id: grievance.assignedToId },
      });
      await prisma.grievanceAuditLog.create({
        data: {
          grievanceId: grievance.id,
          action: "ASSIGNED_TO_AGENT",
          details: {
            assignedTo: grievance.assignedToId,
            assignedToName: assignedUser?.name,
          },
          performedByUserId: adminUser.id,
          createdAt: new Date(grievance.createdAt.getTime() + 1800000), // 30 min later
        },
      });
      grievanceAuditCount++;
    }

    // Status changes
    if (
      grievance.status === "IN_PROGRESS" ||
      grievance.status === "RESOLVED" ||
      grievance.status === "CLOSED"
    ) {
      await prisma.grievanceAuditLog.create({
        data: {
          grievanceId: grievance.id,
          action: "STATUS_CHANGED",
          details: {
            from: "ASSIGNED",
            to: "IN_PROGRESS",
          },
          performedByUserId: grievance.assignedToId,
          createdAt: new Date(grievance.createdAt.getTime() + 3600000),
        },
      });
      grievanceAuditCount++;
    }

    if (grievance.status === "RESOLVED" || grievance.status === "CLOSED") {
      await prisma.grievanceAuditLog.create({
        data: {
          grievanceId: grievance.id,
          action: "RESOLVED",
          details: {
            resolutionSummary: "Issue has been addressed successfully",
          },
          performedByUserId: grievance.assignedToId,
          createdAt: grievance.resolvedAt || new Date(),
        },
      });
      grievanceAuditCount++;
    }

    if (grievance.status === "CLOSED") {
      await prisma.grievanceAuditLog.create({
        data: {
          grievanceId: grievance.id,
          action: "CLOSED",
          details: {
            closedBy: "agent",
          },
          performedByUserId: grievance.assignedToId,
          createdAt: grievance.closedAt || new Date(),
        },
      });
      grievanceAuditCount++;
    }
  }

  console.log(`✅ Created ${grievanceAuditCount} grievance audit logs\n`);

  // ============================================================================
  // 11. GRIEVANCE MESSAGES
  // ============================================================================
  console.log("💬 Creating grievance messages...");

  let messageCount = 0;

  for (const grievance of grievances) {
    const msgCount = await prisma.grievanceMessage.count({
      where: { grievanceId: grievance.id },
    });
    if (msgCount > 0) continue;

    const dp = dataPrincipals.find((d) => d.id === grievance.dataPrincipalId);

    // Initial message from principal
    await prisma.grievanceMessage.create({
      data: {
        grievanceId: grievance.id,
        messageType: "USER_MESSAGE",
        authorType: "PRINCIPAL",
        message: `Hello, I need assistance with my ${grievance.category.replace(/_/g, " ").toLowerCase()}. ${grievance.description}`,
        createdAt: grievance.createdAt,
      },
    });
    messageCount++;

    // System event: Assignment
    if (grievance.assignedToId) {
      const agent = await prisma.user.findUnique({
        where: { id: grievance.assignedToId },
      });

      await prisma.grievanceMessage.create({
        data: {
          grievanceId: grievance.id,
          messageType: "SYSTEM_EVENT",
          eventType: "ASSIGNED",
          eventDetails: {
            assignedTo: agent?.name,
            assignedById: adminUser.id,
          },
          authorType: "SYSTEM",
          createdAt: new Date(grievance.createdAt.getTime() + 1800000),
        },
      });
      messageCount++;

      // Agent response
      await prisma.grievanceMessage.create({
        data: {
          grievanceId: grievance.id,
          messageType: "USER_MESSAGE",
          authorType: "FIDUCIARY_AGENT",
          authorId: grievance.assignedToId,
          message: `Hello ${dp?.name}, thank you for reaching out. I understand you need help with ${grievance.category.replace(/_/g, " ").toLowerCase()}. Let me look into this for you.`,
          createdAt: new Date(grievance.createdAt.getTime() + 7200000),
        },
      });
      messageCount++;

      // Principal reply
      if (grievance.status !== "SUBMITTED" && grievance.status !== "ASSIGNED") {
        await prisma.grievanceMessage.create({
          data: {
            grievanceId: grievance.id,
            messageType: "USER_MESSAGE",
            authorType: "PRINCIPAL",
            message:
              "Thank you for the quick response. I appreciate your help with this matter.",
            createdAt: new Date(grievance.createdAt.getTime() + 10800000),
          },
        });
        messageCount++;

        // Agent follow-up
        await prisma.grievanceMessage.create({
          data: {
            grievanceId: grievance.id,
            messageType: "USER_MESSAGE",
            authorType: "FIDUCIARY_AGENT",
            authorId: grievance.assignedToId,
            message:
              "I have reviewed your request and processed it accordingly. Your request has been completed.",
            createdAt: new Date(grievance.createdAt.getTime() + 14400000),
          },
        });
        messageCount++;
      }
    }

    // System event: Resolution
    if (grievance.status === "RESOLVED" || grievance.status === "CLOSED") {
      await prisma.grievanceMessage.create({
        data: {
          grievanceId: grievance.id,
          messageType: "SYSTEM_EVENT",
          eventType: "RESOLVED",
          eventDetails: {
            resolvedBy: grievance.assignedToId,
            resolvedAt: grievance.resolvedAt,
          },
          authorType: "SYSTEM",
          createdAt: grievance.resolvedAt || new Date(),
        },
      });
      messageCount++;
    }

    // System event: Closed
    if (grievance.status === "CLOSED") {
      await prisma.grievanceMessage.create({
        data: {
          grievanceId: grievance.id,
          messageType: "SYSTEM_EVENT",
          eventType: "CLOSED",
          eventDetails: {
            closedBy: grievance.assignedToId,
            closedAt: grievance.closedAt,
          },
          authorType: "SYSTEM",
          createdAt: grievance.closedAt || new Date(),
        },
      });
      messageCount++;
    }
  }

  console.log(`✅ Created ${messageCount} grievance messages\n`);

  // ============================================================================
  // 12. SLA TRACKERS
  // ============================================================================
  console.log("⏱️  Creating SLA trackers...");

  const slaConfigs = await prisma.slaConfiguration.findMany();

  for (const grievance of grievances) {
    const existing = await prisma.slaTracker.findFirst({
      where: { grievanceId: grievance.id },
    });
    if (existing) continue;

    const config = slaConfigs.find((c) => c.severity === grievance.severity);
    if (!config) continue;

    const expectedResolutionAt = new Date(
      grievance.createdAt.getTime() +
      config.resolutionTimeInDays * 24 * 60 * 60 * 1000,
    );

    const isBreached = grievance.resolvedAt
      ? grievance.resolvedAt > expectedResolutionAt
      : new Date() > expectedResolutionAt;

    await prisma.slaTracker.create({
      data: {
        grievanceId: grievance.id,
        severity: grievance.severity,
        startedAt: grievance.createdAt,
        expectedResolutionAt,
        resolvedAt: grievance.resolvedAt,
        isBreached,
        breachedAt:
          isBreached && !grievance.resolvedAt ? expectedResolutionAt : null,
        escalatedAt: isBreached
          ? new Date(expectedResolutionAt.getTime() + 3600000)
          : null,
      },
    });
  }

  console.log(`✅ Created ${grievances.length} SLA trackers\n`);

  // ============================================================================
  // 13. WEBHOOKS
  // ============================================================================
  console.log("🔗 Creating webhooks...");

  const webhookEvents = [
    "CONSENT_CREATED",
    "CONSENT_REVOKED",
    "CONSENT_EXPIRED",
    "NOTICE_CREATED",
    "DATA_RETENTION_ACTION",
  ];

  const webhooks: any[] = [];

  for (let i = 0; i < 6; i++) {
    const endpointUrl = `https://api.example.com/webhooks/consent-events-${i + 1}`;

    let webhook = await prisma.webhook.findFirst({ where: { endpointUrl } });

    if (!webhook) {
      webhook = await prisma.webhook.create({
        data: {
          eventType: webhookEvents[i % webhookEvents.length] as any,
          endpointUrl,
          httpMethod: "POST",
          customHeaders: {
            "X-API-Key": `webhook_key_${i + 1}`,
            "Content-Type": "application/json",
          },
          signingSecret: `secret_${Math.random().toString(36).substring(7)}`,
          isActive: i !== 5, // Last one is inactive
          targetType: i % 2 === 0 ? "DATA_FIDUCIARY" : "DATA_PROCESSOR",
          dataProcessorId: i % 2 !== 0 ? "DP001" : null,
          createdAt: randomTimeInDay(3),
          updatedAt: randomTimeInDay(3),
        },
      });
    }

    webhooks.push(webhook);
  }

  console.log(`✅ Created ${webhooks.length} webhooks\n`);

  // ============================================================================
  // 14. WEBHOOK LOGS
  // ============================================================================
  console.log("📡 Creating webhook logs...");

  const webhookStatuses = ["DELIVERED", "FAILED", "TIMEOUT"];
  let webhookLogCount = 0;

  for (let day = 0; day < 4; day++) {
    const timestamps = generateTimestamps(12, day);

    for (let i = 0; i < 12; i++) {
      const webhook = webhooks[i % webhooks.length];
      if (!webhook.isActive && day < 2) continue; // Skip logs for inactive webhooks in early days

      const status =
        i % 10 === 0 ? "FAILED" : i % 15 === 0 ? "TIMEOUT" : "DELIVERED";
      const httpStatus =
        status === "DELIVERED" ? 200 : status === "FAILED" ? 500 : null;
      const eventId = `evt_demo_${webhook.id}_${day}_${i}`;

      const existing = await prisma.webhookLog.findFirst({
        where: { eventId },
      });

      if (!existing) {
        await prisma.webhookLog.create({
          data: {
            webhookId: webhook.id,
            eventId,
            eventType: webhook.eventType,
            payload: {
              eventType: webhook.eventType,
              data: {
                consentId: consents[i % consents.length]?.publicId,
                timestamp: timestamps[i].toISOString(),
              },
            },
            status,
            httpStatus,
            attemptedAt: timestamps[i],
            responseTime:
              status === "DELIVERED"
                ? 150 + Math.floor(Math.random() * 200)
                : null,
            errorMessage:
              status === "FAILED"
                ? "Internal server error"
                : status === "TIMEOUT"
                  ? "Request timeout after 30s"
                  : null,
          },
        });
        webhookLogCount++;
      }
    }
  }

  console.log(`✅ Created ${webhookLogCount} webhook logs\n`);

  // ============================================================================
  // 15. NOTIFICATIONS
  // ============================================================================
  console.log("🔔 Creating notifications...");

  const notificationTypes = [
    "CONSENT_EXPIRING_SOON",
    "CONSENT_EXPIRED",
    "GRIEVANCE_UPDATE",
    "NOTICE_AVAILABLE",
    "CONSENT_REVOKED",
  ];

  let notificationCount = 0;

  for (let i = 0; i < 35; i++) {
    const dp = dataPrincipals[i % dataPrincipals.length];
    const daysAgo = Math.floor(i / 9);
    const type = notificationTypes[i % notificationTypes.length];
    const seen = i % 3 !== 0; // 66% seen rate

    const existing = await prisma.notification.findFirst({
      where: { dataPrincipalId: dp.id, type, seen },
    });

    if (!existing) {
      await prisma.notification.create({
        data: {
          dataPrincipalId: dp.id,
          type,
          seen,
          metadata: {
            title: `${type.replace(/_/g, " ")}`,
            message: `You have a new ${type.toLowerCase().replace(/_/g, " ")} notification`,
            relatedId:
              i % 2 === 0
                ? consents[i % consents.length]?.publicId
                : grievances[i % grievances.length]?.publicId,
          },
        },
      });
      notificationCount++;
    }
  }

  console.log(`✅ Created ${notificationCount} notifications\n`);

  // ============================================================================
  // 16. API KEYS
  // ============================================================================
  console.log("🔑 Creating API keys...");

  const apiKeyManager = createdUsers.find(
    (u) => u.roleName === Roles.PRIVY_API_KEY_MANAGER,
  );

  if (apiKeyManager) {
    const apiKeys = [
      {
        name: "Production API Key",
        prefix: "pk_live_",
        active: true,
        lastUsed: 1,
      },
      {
        name: "Staging API Key",
        prefix: "pk_test_",
        active: true,
        lastUsed: 0,
      },
      { name: "Development Key", prefix: "pk_dev_", active: true, lastUsed: 2 },
      {
        name: "Deprecated Key",
        prefix: "pk_old_",
        active: false,
        lastUsed: null,
      },
    ];

    for (const keyData of apiKeys) {
      const existing = await prisma.apiKey.findFirst({
        where: { name: keyData.name },
      });

      if (!existing) {
        const hashedKey = await bcrypt.hash(
          `${keyData.prefix}${Math.random().toString(36).substring(2)}`,
          10,
        );

        await prisma.apiKey.create({
          data: {
            name: keyData.name,
            description: `${keyData.name} for external integrations`,
            key: hashedKey,
            prefix: keyData.prefix,
            userId: apiKeyManager.id,
            isActive: keyData.active,
            lastUsedAt:
              keyData.lastUsed !== null
                ? randomTimeInDay(keyData.lastUsed)
                : null,
            createdAt: randomTimeInDay(3),
            updatedAt: randomTimeInDay(3),
          },
        });
      }
    }

    console.log(`✅ Created ${apiKeys.length} API keys\n`);
  }

  // ============================================================================
  // SUMMARY
  // ============================================================================
  console.log("=".repeat(60));
  console.log("✨ Demo data seeding completed successfully!\n");
  console.log("📊 Summary:");
  console.log(`   👥 Users: ${createdUsers.length} additional users`);
  console.log(`   📧 Notices: ${notices.length}`);
  console.log(`   📝 Notice Metadata: ${noticeMetadataCount}`);
  console.log(`   ✅ Consents: ${consents.length}`);
  console.log(`   📜 Consent Audit Trails: ${auditCount}`);
  console.log(`   📊 Principal Activity Logs: ${activityCount}`);
  console.log(`   🔍 System Audit Logs: ${auditLogCount}`);
  console.log(`   🎫 Grievances: ${grievances.length}`);
  console.log(`   💬 Grievance Messages: ${messageCount}`);
  console.log(`   📝 Grievance Audit Logs: ${grievanceAuditCount}`);
  console.log(`   ⏱️  SLA Trackers: ${grievances.length}`);
  console.log(`   🔗 Webhooks: ${webhooks.length}`);
  console.log(`   📡 Webhook Logs: ${webhookLogCount}`);
  console.log(`   🔔 Notifications: ${notificationCount}`);
  console.log(`   🔑 API Keys: 4`);
  console.log("=".repeat(60));
  console.log("\n🎉 Your database is now populated with realistic demo data!");
  console.log("📅 Data spans from 4 days ago to present");
  console.log("🚀 Ready for your presentation!\n");

  console.log("🌱  The seed command has been executed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
