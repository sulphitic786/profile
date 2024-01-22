import { Box, Button, Card, Divider, Fab, Grid, Icon, styled, useTheme } from "@mui/material";
import { Breadcrumb, MatxProgressBar, SimpleCard } from "app/components";
import { H5, Paragraph } from "app/components/Typography";
import { useState } from "react";

// styled components
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const FabIcon = styled(Fab)({
  textTransform: "capitalize",
  "& .icon": { marginRight: "8px" },
});

const HiddenInput = styled("input")({ display: "none" });

const DragFileBox = styled(FlexBox)({
  height: 200,
  width: "100%",
  borderRadius: "4px",
  marginBottom: "24px",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.01)",
});

const UploadForm = () => {
  const [files, setFiles] = useState([]);
  const [queProgress, setQueProgress] = useState(0);
  const [dargClass, setDragClass] = useState("");

  const handleFileSelect = (event) => {
    let files = event.target.files;
    let list = [];

    for (const iterator of files) {
      list.push({ file: iterator, uploading: false, error: false, progress: 0 });
    }

    setFiles(list);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragClass("drag-shadow");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.persist();

    let files = event.dataTransfer.files;
    let list = [];

    for (const iterator of files) {
      list.push({ file: iterator, uploading: false, error: false, progress: 0 });
    }

    setDragClass("");
    setFiles(list);

    return false;
  };

  const handleDragStart = (event) => {
    setDragClass("drag-shadow");
  };

  const handleSingleRemove = (index) => {
    let tempList = [...files];
    tempList.splice(index, 1);
    setFiles([...tempList]);
  };

  const handleAllRemove = () => {
    setFiles([]);
    setQueProgress(0);
  };

  const uploadSingleFile = (index) => {
    let allFiles = [...files];
    let file = files[index];

    allFiles[index] = { ...file, uploading: true, error: false };

    setFiles([...allFiles]);
  };

  const uploadAllFile = () => {
    let allFiles = [];

    files.map((item) => {
      allFiles.push({ ...item, uploading: true, error: false });
      return item;
    });

    setFiles([...allFiles]);
    setQueProgress(35);
  };

  const handleSingleCancel = (index) => {
    let allFiles = [...files];
    let file = files[index];

    allFiles[index] = { ...file, uploading: false, error: true };

    setFiles([...allFiles]);
  };

  const handleCancelAll = () => {
    let allFiles = [];

    files.map((item) => {
      allFiles.push({ ...item, uploading: false, error: true });
      return item;
    });

    setFiles([...allFiles]);
    setQueProgress(0);
  };

  let isEmpty = !!!files.length;

  const { palette } = useTheme();
  const bgError = palette.error.main;

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Others", path: "/" }, { name: "Upload" }]} />
      </Box>

      <SimpleCard title="File Upload">
        <Box mb={3} display="flex" flexWrap={1}>
          <label htmlFor="upload-single-file">
            <FabIcon color="primary" component="span" variant="extended">
              <FlexBox>
                <Icon className="icon">cloud_upload</Icon>
                <span>Single File</span>
              </FlexBox>
            </FabIcon>
          </label>

          <HiddenInput onChange={handleFileSelect} id="upload-single-file" type="file" />

          <Box px={2} />

          <label htmlFor="upload-multiple-file">
            <FabIcon color="primary" component="span" variant="extended">
              <FlexBox>
                <Icon className="icon">cloud_upload</Icon>
                <span>Multiple File</span>
              </FlexBox>
            </FabIcon>
          </label>

          <HiddenInput onChange={handleFileSelect} id="upload-multiple-file" type="file" multiple />
        </Box>

        <DragFileBox
          onDrop={handleDrop}
          className={dargClass}
          onDragOver={handleDragOver}
          onDragEnter={handleDragStart}
        >
          {isEmpty ? (
            <span>Drop your files here</span>
          ) : (
            <H5>
              {files.length} file{files.length > 1 ? "s" : ""} selected...
            </H5>
          )}
        </DragFileBox>

        <Card sx={{ mb: 3 }} elevation={2}>
          <Box p={2}>
            <Grid container spacing={2} justify="center" alignItems="center" direction="row">
              <Grid item lg={4} md={4}>
                Name
              </Grid>

              <Grid item lg={1} md={1}>
                Size
              </Grid>

              <Grid item lg={2} md={2}>
                Progress
              </Grid>

              <Grid item lg={1} md={1}>
                Status
              </Grid>

              <Grid item lg={4} md={4}>
                Actions
              </Grid>
            </Grid>
          </Box>

          <Divider />

          {isEmpty && <Paragraph sx={{ p: 2 }}>Que is empty</Paragraph>}

          {files.map((item, index) => {
            let { file, uploading, error, progress } = item;
            return (
              <Box p={2} key={file.name}>
                <Grid container spacing={2} justify="center" alignItems="center" direction="row">
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    {file.name}
                  </Grid>

                  <Grid item lg={1} md={1} sm={12} xs={12}>
                    {(file.size / 1024 / 1024).toFixed(1)} MB
                  </Grid>

                  <Grid item lg={2} md={2} sm={12} xs={12}>
                    <MatxProgressBar value={progress}></MatxProgressBar>
                  </Grid>

                  <Grid item lg={1} md={1} sm={12} xs={12}>
                    {error && <Icon color="error">error</Icon>}
                  </Grid>

                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <div>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        disabled={uploading}
                        onClick={() => uploadSingleFile(index)}
                      >
                        Upload
                      </Button>

                      <Button
                        sx={{ mx: 1 }}
                        size="small"
                        variant="contained"
                        disabled={!uploading}
                        color="secondary"
                        onClick={() => handleSingleCancel(index)}
                      >
                        Cancel
                      </Button>

                      <Button
                        size="small"
                        onClick={() => handleSingleRemove(index)}
                        variant="contained"
                        sx={{ color: "#fff", background: bgError }}
                      >
                        Remove
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Card>

        <Box>
          <Paragraph>Queue progress:</Paragraph>

          <Box py={2}>
            <MatxProgressBar value={queProgress}></MatxProgressBar>
          </Box>

          <Box display="flex">
            <Button variant="contained" color="primary" disabled={isEmpty} onClick={uploadAllFile}>
              Upload All
            </Button>

            <Button
              sx={{ mx: 1 }}
              color="secondary"
              disabled={isEmpty}
              variant="contained"
              onClick={handleCancelAll}
            >
              Cancel All
            </Button>

            {!isEmpty && (
              <Button
                variant="contained"
                onClick={handleAllRemove}
                sx={{ color: "#fff", background: bgError }}
              >
                Remove All
              </Button>
            )}
          </Box>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default UploadForm;
