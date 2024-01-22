import { Card, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvoiceEditor from "./InvoiceEditor";
import InvoiceViewer from "./InvoiceViewer";

const StyledCard = styled(Card)(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const InvoiceDetails = () => {
  const { id } = useParams();
  const [showInvoiceEditor, setShowInvoiceEditor] = useState(false);
  const [isNewInvoice, setIsNewInvoice] = useState(false);

  const toggleInvoiceEditor = () => {
    setShowInvoiceEditor(!showInvoiceEditor);
    setIsNewInvoice(false);
  };

  useEffect(() => {
    if (id === "add") {
      setShowInvoiceEditor(true);
      setIsNewInvoice(true);
    }
  }, [id]);

  return (
    <StyledCard elevation={6}>
      {showInvoiceEditor ? (
        <InvoiceEditor toggleInvoiceEditor={toggleInvoiceEditor} isNewInvoice={isNewInvoice} />
      ) : (
        <InvoiceViewer toggleInvoiceEditor={toggleInvoiceEditor} />
      )}
    </StyledCard>
  );
};

export default InvoiceDetails;
