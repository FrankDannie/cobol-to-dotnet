import React from "react";
import { useDropzone, Accept } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "./FileUpload.scss";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
        'application/zip': ['.zip'],
      },
    maxFiles: 1,
  });

  return (
    <Box {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      <UploadFileIcon className="upload-icon" />
      <Typography variant="h6" className="upload-text">
        Drag & drop a .zip file here, or click to select one
      </Typography>
      <Typography variant="body2" className="upload-subtext">
        Only .zip files are allowed
      </Typography>
    </Box>
  );
};

export default FileUpload;
