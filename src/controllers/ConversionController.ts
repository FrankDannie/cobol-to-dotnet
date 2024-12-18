
import { ConversionInput, ConversionOutput } from "../models/ConversionModel";
import { conversionService } from "../services/ConversionService";

export class ConversionController {
  async convertCode(input: ConversionInput): Promise<ConversionOutput> {
    try {
      const result = await conversionService.convert(input);
      return result;
    } catch (error) {
      console.error("Error in ConversionController:", error);
      throw new Error("Code conversion failed.");
    }
  }
}
