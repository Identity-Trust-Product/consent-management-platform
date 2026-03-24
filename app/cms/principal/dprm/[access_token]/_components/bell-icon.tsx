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

import { Bell } from "lucide-react";

const AnimatedBellIcon = () => {
  return (
    <div className="inline-block cursor-pointer hover:animate-[left-right-shake_0.4s_ease-in-out]">
      <Bell />
    </div>
  );
};

export default AnimatedBellIcon;
