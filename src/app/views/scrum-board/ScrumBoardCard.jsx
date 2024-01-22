import { Avatar, Box, Button, Icon, styled } from "@mui/material";
import { H6 } from "app/components/Typography";
import { useSelector } from "react-redux";
import ScrumBoardLabelBar from "./ScrumBoardLabelBar";

// styled components
const ContentBox = styled(Box)({
  display: "flex",
  marginTop: "12px",
  alignItems: "center",
  fontSize: "0.8125rem",
  justifyContent: "space-between",
});

const StyledAvatar = styled(Avatar)({
  height: "32px",
  width: "32px",
});

const IMG = styled("img")({
  width: "100%",
  borderRadius: "4px",
});

const ScrumBoardCard = ({ card }) => {
  let {
    title,
    comments,
    coverImage,
    attachments,
    labels = [],
    members = [], //members in card
  } = card;

  const { memberList, labelList } = useSelector((state) => state.scrumboard);

  let modifiedCardMemberList = members.map((boardMemberId) =>
    memberList.find((member) => member.id === boardMemberId)
  );

  let modifiedLabelList = labels.map((labelId) => labelList.find((label) => label.id === labelId));

  return (
    <div className="scrum-board-card">
      {coverImage && <IMG src={coverImage} alt="stair" />}
      <Box px={2} py="12px">
        {modifiedLabelList.length !== 0 && (
          <Box mb="12px" display="flex" fontWeight="500">
            {modifiedLabelList.map(
              (label) => label && <ScrumBoardLabelBar key={label.id} color={label.color} />
            )}
          </Box>
        )}
        <H6>{title}</H6>

        {(comments.length !== 0 || attachments.length !== 0 || members.length !== 0) && (
          <ContentBox className="button-group">
            <Box display="flex">
              {comments.length !== 0 && (
                <Button size="small">
                  <Icon fontSize="small" sx={{ mr: "4px", fontSize: "0.8125rem" }}>
                    chat
                  </Icon>
                  <span>{comments.length}</span>
                </Button>
              )}
              {attachments.length !== 0 && (
                <Button size="small">
                  <Icon fontSize="small" sx={{ mr: "4px", fontSize: "0.8125rem" }}>
                    attach_file
                  </Icon>
                  <span>{attachments.length}</span>
                </Button>
              )}
            </Box>
            <Box ml="-0.875rem" display="flex" position="relative">
              {modifiedCardMemberList.map(
                (member) => member && <StyledAvatar key={member.id} src={member.avatar} />
              )}
            </Box>
          </ContentBox>
        )}
      </Box>
    </div>
  );
};

export default ScrumBoardCard;
