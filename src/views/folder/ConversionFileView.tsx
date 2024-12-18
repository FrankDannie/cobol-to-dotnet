import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import "./ConversionFileView.scss";
import CodeDisplay from "../../components/CodeDisplay";
import { fileService } from "../../services/FileService";
import FileUpload from "../../components/FileUpload";

const ConversionFileView: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [convertedCode, setConvertedCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    setUploadedFile(file);
    setLoading(true);
    setError(null);
    setConvertedCode(null);

    try {
      const result = await fileService.uploadAndConvert(file);
      setConvertedCode(result.dotnetCode);
    } catch (err) {
      setError("Failed to process the file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="conversion-page">
      <Typography variant="h4" className="header">
        COBOL to .NET Code Converter
      </Typography>

      <FileUpload onFileUpload={handleFileUpload} />

      {loading && (
        <Box className="loader">
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography className="error-text">
          {error}
        </Typography>
      )}

      {convertedCode && (
        <Box className="output-section">
          <Typography variant="h6">Converted .NET Code:</Typography>
          <CodeDisplay code={convertedCode} language="csharp" />
        </Box>
      )}
    </Box>
  );
};

export default ConversionFileView;
