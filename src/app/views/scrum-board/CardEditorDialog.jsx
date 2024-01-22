import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  Divider,
  FormControlLabel,
  Grid,
  Icon,
  IconButton,
  Input,
  MenuItem,
  styled,
  TextField,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MatxMenu } from "app/components";
import { FlexBetween } from "app/components/FlexBox";
import { H6, Paragraph, Small, Span } from "app/components/Typography";
import useAuth from "app/hooks/useAuth";
import { updateCardInList } from "app/redux/slices/scrumSlice";
import { generateRandomId, getTimeDifference } from "app/utils/utils.js";
import { useEffect, useState } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";

// styled components
const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const StyledAvatar = styled(Avatar)({
  height: "32px",
  width: "32px",
});

const StyledInput = styled(Input)({
  flexGrow: 1,
  fontSize: "16px",
  fontWeight: "500",
  paddingLeft: "3px",
  paddingRight: "8px",
  marginLeft: "12px",
  textTransform: "capitalize",
});

const Heading = styled(H6)(({ theme }) => ({
  textTransform: "uppercase",
  color: theme.palette.text.secondary,
}));

const StyledScrollBar = styled(Scrollbar)({
  maxHeight: 380,
  position: "relative",
  paddingTop: "16px",
  marginBottom: "16px",
});

const ScrollContent = styled("div")(({ theme }) => ({
  padding: "0px 24px !important",
  paddingTop: "24px !important",
  [theme.breakpoints.down("sm")]: {
    padding: "0px 12px !important",
    paddingTop: "16px !important",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  padding: "0px 24px !important",
  paddingTop: "16px !important",
  [theme.breakpoints.down("sm")]: {
    padding: "0px 12px !important",
  },
}));

const StyledItem = styled(MenuItem)({
  minWidth: 164,
  display: "flex",
  alignItems: "center",
});

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  padding: "16px",
  display: "flex",
  alignItems: "center",
  paddingTop: "16px !important",
  background: theme.palette.background.default,
}));

const IMG = styled("img")({ width: "100%" });

const CardEditorDialog = ({ open, card, handleClose }) => {
  const [state, setState] = useState({});

  const theme = useTheme();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { board, memberList, labelList } = useSelector((state) => state.scrumboard);

  const closeDialog = () => handleClose();

  const makeCoverPhoto = (coverImage) => setState({ ...state, coverImage });

  const removeAttachments = (index) => {
    let { attachments = [] } = state;
    attachments.splice(index, 1);
    setState({ ...state, attachments });
  };

  const handleChange = (event) => {
    let target = event.target;
    let id = target.value;

    if (target.name === "avatar") {
      let { cardMembers, boardMembers } = state;
      let member = boardMembers.find((user) => user.id === id);

      if (!target.checked) {
        cardMembers.splice(cardMembers.indexOf(member), 1);
        setState({ ...state, cardMembers });
      } else {
        cardMembers.push(member);
        setState({ ...state, cardMembers });
      }
    } else if (target.name === "label") {
      let { labels } = state;
      let label = labelList.find((item) => item.id === parseInt(id));

      if (!target.checked) {
        labels.splice(labels.indexOf(label), 1);
        setState({ ...state, labels });
      } else {
        labels.push(label);
        setState({ ...state, labels });
      }
    } else if (event.key === "Enter" && !event.shiftKey && target.name === "commentText") {
      setState({ ...state, [event.target.name]: event.target.value });
      sendComment();
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  };

  const handleSave = () => {
    let {
      id,
      title,
      listId,
      boardId,
      coverImage,
      description,
      labels = [],
      comments = [],
      cardMembers = [],
      attachments = [],
    } = state;

    let card = {
      id,
      title,
      comments,
      coverImage,
      description,
      attachments,
      members: cardMembers.map((member) => member.id),
      labels: labels.map((item) => item.id),
    };

    dispatch(updateCardInList({ boardId, listId, card }));
    closeDialog();
  };

  const sendComment = () => {
    let { comments = [], commentText } = state;

    if (commentText.trim() !== "") {
      comments.push({
        id: generateRandomId(),
        uid: user.id,
        text: commentText.trim(),
        time: new Date(),
      });
      commentText = "";
    }
    setState({ ...state, comments, commentText });
  };

  useEffect(() => {
    let {
      members = [], //members in card
      labels = [],
    } = card;

    let cardMembers = members.map((boardMemberId) =>
      memberList.find((member) => member.id === boardMemberId)
    );

    let modifiedLabelList = labels.map((labelId) =>
      labelList.find((label) => label.id === labelId)
    );

    let boardMembers = board.members.map((boardMember) =>
      memberList.find((member) => member.id === boardMember.id)
    );

    setState((state) => ({
      ...state,
      ...card,
      cardMembers,
      boardMembers,
      boardId: board.id,
      labels: [...modifiedLabelList],
    }));
  }, [card, labelList, memberList, board.id, board.members]);

  let {
    title,
    description,
    commentText,
    labels = [],
    comments = [],
    cardMembers = [],
    attachments = [],
    boardMembers = [],
  } = state;

  const bgLightGrey = "rgba(0, 0, 0, 0.01)";
  const bgPrimary = theme.palette.primary.main;
  const textMuted = theme.palette.text.secondary;
  const textPrimary = theme.palette.primary.main;

  return (
    <Dialog onClose={closeDialog} open={open} fullScreen={isMobile} fullWidth={true} scroll="body">
      <div className="scrum-board">
        <ContentBox>
          <FlexBox>
            <FlexBox flexGrow={1}>
              <Icon sx={{ color: textMuted }}>assignment</Icon>
              <StyledInput
                type="text"
                autoFocus
                name="title"
                onChange={handleChange}
                value={title}
              />
            </FlexBox>
            <IconButton size="small" onClick={closeDialog}>
              <Icon>clear</Icon>
            </IconButton>
          </FlexBox>

          <Box ml={5}>
            <Paragraph sx={{ mb: 2, fontSize: "0.8125rem", color: textMuted }}>
              Tech Startup Board Hot Backlog
            </Paragraph>

            <FlexBetween mb={2}>
              <div>
                <Heading sx={{ mb: 1 }}>Card Members</Heading>
                <Box ml="-0.875rem" display="flex" position="relative">
                  {cardMembers.map((member) => (
                    <StyledAvatar key={member.id} src={member.avatar} />
                  ))}
                  <MatxMenu
                    horizontalPosition="center"
                    shouldCloseOnItemClick={false}
                    menuButton={
                      <Tooltip title={"Add"} fontSize="large">
                        <StyledAvatar sx={{ ml: "-12px", cursor: "pointer" }}>+</StyledAvatar>
                      </Tooltip>
                    }
                  >
                    {boardMembers.map((user) => (
                      <FormControlLabel
                        sx={{ ml: 0 }}
                        key={user.id}
                        control={
                          <Checkbox
                            name="avatar"
                            checked={cardMembers.some((member) => member.id === user.id)}
                            onChange={handleChange}
                            value={user.id}
                          />
                        }
                        label={
                          <FlexBox>
                            <Avatar src={user.avatar} sx={{ width: 24, height: 24 }} />
                            <Span sx={{ ml: "12px" }}>{user.name}</Span>
                          </FlexBox>
                        }
                      />
                    ))}
                  </MatxMenu>
                </Box>
              </div>
              <div>
                <Heading sx={{ mb: 1 }}>labels</Heading>
                <div className="button-group">
                  {labels.map((label) => (
                    <Button
                      key={label.id}
                      size="small"
                      variant="contained"
                      sx={{
                        mr: "4px",
                        color: "#fff",
                        fontSize: "0.8125rem",
                        textTransform: "capitalize",
                      }}
                    >
                      {label.title}
                    </Button>
                  ))}
                  <MatxMenu
                    horizontalPosition="right"
                    shouldCloseOnItemClick={false}
                    menuButton={
                      <Tooltip title={"Add"} fontSize="large">
                        <Button sx={{ background: bgLightGrey }} size="small">
                          +
                        </Button>
                      </Tooltip>
                    }
                  >
                    {labelList.map((label) => (
                      <FormControlLabel
                        sx={{ ml: 0 }}
                        key={label.id}
                        control={
                          <Checkbox
                            checked={labels.some((item) => item.id === label.id)}
                            onChange={handleChange}
                            value={label.id}
                            name="label"
                          />
                        }
                        label={
                          <FlexBox>
                            <Box
                              sx={{ background: bgPrimary, fontSize: "24px", borderRadius: "4px" }}
                            />
                            <Span sx={{ ml: "12px" }}>{label.title}</Span>
                          </FlexBox>
                        }
                      />
                    ))}
                  </MatxMenu>
                </div>
              </div>
            </FlexBetween>
          </Box>
        </ContentBox>

        <Divider />

        <StyledScrollBar>
          <ScrollContent>
            <FlexBox mb={1}>
              <Icon sx={{ color: textMuted }}>description</Icon>
              <Heading sx={{ ml: 2 }}>description</Heading>
            </FlexBox>

            <Box ml={5} mb={2} display="flex">
              <TextField
                fullWidth
                multiline
                sx={{ color: textMuted }}
                onChange={handleChange}
                name="description"
                value={description}
                variant="outlined"
              />
            </Box>

            <FlexBetween>
              <FlexBox>
                <Icon sx={{ color: textMuted }}>attach_file</Icon>
                <Heading sx={{ ml: 2 }}>attachments</Heading>
              </FlexBox>

              <label htmlFor="upload-file">
                <Button
                  component="span"
                  sx={{ color: textPrimary, fontWeight: "500", textTransform: "uppercase" }}
                >
                  + add an attachment
                </Button>
              </label>
              <input className="hidden" id="upload-file" type="file" multiple />
            </FlexBetween>

            <Box ml={5} mb={2}>
              <Grid container spacing={2}>
                {attachments.map((file, id) => (
                  <Grid key={id} item lg={6} md={6} sm={12} xs={12}>
                    <StyledCard elevation={2}>
                      <FlexBox borderRadius="8px">
                        <IMG src={file.url} alt="cover" />
                      </FlexBox>

                      <Box ml={2}>
                        <Heading sx={{ textTransform: "capitalize" }}>{file.name}</Heading>
                        <Small
                          sx={{
                            color: textMuted,
                            fontSize: "0.8125rem",
                            textTransform: "capitalize",
                          }}
                        >
                          {file.size}
                        </Small>
                      </Box>

                      <MatxMenu
                        horizontalPosition="center"
                        menuButton={
                          <IconButton sx={{ ml: 2 }}>
                            <Icon>more_vert</Icon>
                          </IconButton>
                        }
                      >
                        <StyledItem onClick={() => makeCoverPhoto(file.url)}>
                          <Icon> insert_photo </Icon>
                          <Span sx={{ pl: 2 }}>Make Cover</Span>
                        </StyledItem>

                        <StyledItem onClick={() => removeAttachments(id)}>
                          <Icon> delete </Icon>
                          <Span sx={{ pl: 2 }}>Remove</Span>
                        </StyledItem>
                      </MatxMenu>
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </ScrollContent>

          <Divider sx={{ my: 2 }} />

          <ContentBox pt={0}>
            <FlexBox mb={1}>
              <Icon sx={{ color: textMuted }}>message</Icon>
              <Heading sx={{ ml: 2 }}>comments</Heading>
            </FlexBox>

            <Box ml={5} className="comments">
              {comments.map((comment) => {
                let user = memberList.find((user) => user.id === comment.uid);
                return (
                  <Box mb={2} key={comment.id}>
                    <FlexBox mb={1}>
                      <StyledAvatar src={user.avatar} sizes={36} />
                      <Box ml="12px">
                        <H6>{user.name}</H6>
                        <small>{getTimeDifference(new Date(comment.time))} ago</small>
                      </Box>
                    </FlexBox>

                    <Paragraph sx={{ color: textMuted }}>{comment.text}</Paragraph>
                  </Box>
                );
              })}

              <FlexBox mb={2}>
                <StyledAvatar src={user.photoURL} sizes={36} />
                <Box display="flex" flexGrow={1}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="commentText"
                    onChange={handleChange}
                    onKeyDown={handleChange}
                    value={commentText || ""}
                    inputProps={{ style: { padding: "10px" } }}
                    sx={{ m: "12px", color: textMuted }}
                  />
                </Box>
                <Button onClick={sendComment}>Send</Button>
              </FlexBox>
            </Box>
          </ContentBox>
        </StyledScrollBar>

        <ContentBox pt={0} mb="12px" display="flex" justifyContent="flex-end">
          <Button sx={{ mr: "12px" }} onClick={closeDialog}>
            Cancel
          </Button>

          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </ContentBox>
      </div>
    </Dialog>
  );
};

export default CardEditorDialog;
