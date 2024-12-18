import React, { useState } from "react";
import "./ConversionCodeView.scss";
import { ConversionInput } from "../../models/ConversionModel";
import { ConversionController } from "../../controllers/ConversionController";

const conversionController = new ConversionController();

const ConversionCodeView: React.FC = () => {
  const [cobolCode, setCobolCode] = useState("");
  const [dotnetCode, setDotnetCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    setLoading(true);
    setError("");
    try {
      const input: ConversionInput = { id: "123", cobolCode };
      const result = await conversionController.convertCode(input);
      setDotnetCode(result.dotnetCode);
    } catch (err) {
      setError("Failed to convert COBOL code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="conversionForm"> {/* Apply the scoped styles */}
      <h1>COBOL to .NET Converter</h1>
      <textarea
        value={cobolCode}
        onChange={(e) => setCobolCode(e.target.value)}
        placeholder="Enter COBOL Code"
        rows={10}
        cols={50}
      />
      <button onClick={handleConvert} disabled={loading}>
        {loading ? "Converting..." : "Convert"}
      </button>
      {error && <p className="error">{error}</p>} {/* Apply scoped error class */}
      {dotnetCode && (
        <div>
          <h3>Converted .NET Code:</h3>
          <pre>{dotnetCode}</pre>
        </div>
      )}
    </div>
  );
};

export default ConversionCodeView;
