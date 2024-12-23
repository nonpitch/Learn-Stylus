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
  
  export interface LessonSection {
    id: string;
    title: string;
    content?: string;
    infoBoxes?: InfoBox[];
    gridItems?: GridItem[];
    lineItems?: LineItem[];
  }
  
  export interface Lesson {
    id: string;
    courseId: string;
    title: string;
    duration: string;
    sections: LessonSection[];
    keyTakeaways: string[];
    totalSections: number;
    lessonNumber: number;
  }
  
  export interface LineItem {
    title: string;
    content: string;
  }