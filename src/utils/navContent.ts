export interface NavItem {
    name: string;
    url: string;
    pageTitle: string;
  }
  
  export const patchesContent: NavItem[] = [
    {
      name: "PVC",
      url: "/collection/pvc",
      pageTitle: "PVC Patches",
    },
    {
      name: "IR",
      url: "/collection/ir",
      pageTitle: "IR Patches",
    },
    {
      name: "Laser",
      url: "/collection/laser",
      pageTitle: "Laser Patches",
    },
    {
      name: "Printed",
      url: "/collection/printed",
      pageTitle: "Printed Patches",
    },
    {
      name: "Reflective",
      url: "/collection/reflective",
      pageTitle: "Reflective Patches",
    },
    {
      name: "Embrioded",
      url: "/collection/embrioded",
      pageTitle: "Embrioded Patches",
    },
  ];
  
  export const keychainContent: NavItem[] = [
    {
      name: "Ready-to-ship",
      url: "/collection/keychains",
      pageTitle: "Keychains",
    },
    {
      name: "Custom Made",
      url: "/custom/keychains",
      pageTitle: "Custom Keychains",
    },
  ];
  
  