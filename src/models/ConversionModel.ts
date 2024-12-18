export interface ConversionInput {
    id: string;
    cobolCode: string;
  }
  
  export interface ConversionOutput {
    id: string;
    dotnetCode: string;
    status: string; // e.g., "success", "error"
  }
  