export interface Section {
    id: string;
    title: string;
    content: string;
    keyPoints?: string[];
    codeExample?: string;
  }
  
  export interface InfoBox {
    title: string;
    content: string;
    variant: 'info' | 'warning' | 'success';
  }
  
  export interface GridItem {
    title: string;
    content: string;
  }
  
  export interface ProjectSection {
    id: string;
    title: string;
    content?: string;
    infoBoxes?: InfoBox[];
    gridItems?: GridItem[];
    lineItems?: LineItem[];
  }
  
  export interface Project {
    id: string;
    projectId: string;
    title: string;
    duration: string;
    sections: ProjectSection[];
    keyTakeaways: string[];
    totalSections: number;
    projectNumber: number;
  }
  
  export interface LineItem {
    title: string;
    content: string;
  }