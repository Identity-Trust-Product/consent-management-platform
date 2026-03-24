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

import { PrismaClient, GrievanceSeverity } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Seed default SLA configurations for all severity levels.
 * This can be run manually or as part of the main seed script.
 */
async function seedSlaConfigurations() {
  console.log("Seeding SLA configurations...");

  const defaultConfigs = [
    {
      severity: GrievanceSeverity.CRITICAL,
      resolutionTimeInDays: 1,
      escalationUserIds: [],
      active: true,
      businessHoursEnabled: false,
    },
    {
      severity: GrievanceSeverity.HIGH,
      resolutionTimeInDays: 2,
      escalationUserIds: [],
      active: true,
      businessHoursEnabled: false,
    },
    {
      severity: GrievanceSeverity.MEDIUM,
      resolutionTimeInDays: 3,
      escalationUserIds: [],
      active: true,
      businessHoursEnabled: false,
    },
    {
      severity: GrievanceSeverity.LOW,
      resolutionTimeInDays: 5,
      escalationUserIds: [],
      active: true,
      businessHoursEnabled: false,
    },
  ];

  for (const config of defaultConfigs) {
    const result = await prisma.slaConfiguration.upsert({
      where: { severity: config.severity },
      update: {}, // No updates if exists, preserve current settings
      create: config,
    });

    // Check if it was created recently (within last second) to log correctly,
    // or just log that it's ensured.
    // Since upsert doesn't return "created" vs "updated" status easily without checking dates,
    // we'll just log that it's handled.
    if (result.createdAt.getTime() === result.updatedAt.getTime()) {
      console.log(`  ✓ Created ${config.severity} config (${config.resolutionTimeInDays} days)`);
    } else {
      console.log(`  ✓ ${config.severity} already exists, skipping`);
    }
  }

  console.log("✅ SLA configurations seeded successfully\n");
}

// Run if called directly
if (require.main === module) {
  seedSlaConfigurations()
    .then(() => {
      console.log("Seeding completed successfully");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Seeding failed:", error);
      process.exit(1);
    })
    .finally(() => {
      prisma.$disconnect();
    });
}

export { seedSlaConfigurations };
