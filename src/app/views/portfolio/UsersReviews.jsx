import React from "react";
import { Container, Grid, Typography, IconButton, Box, Avatar, Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const UsersReviews = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} xl={8} textAlign="center">
          <Typography variant="h3" sx={{ mb: 4 }}>
            Testimonials
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, pb: 2, mbMd: 5, pbMd: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure
            provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a
            pariatur veniam.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5} justifyContent="center">
        {/* First Testimonial */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Avatar
              alt="Maria Smantha"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              sx={{
                width: 150,
                height: 150,
                boxShadow: 1,
                borderRadius: "50%",
                marginBottom: 2
              }}
            />
            <Typography variant="h5" sx={{ mb: 3 }}>
              Maria Smantha
            </Typography>
            <Typography variant="h6" color="primary" sx={{ mb: 3 }}>
              Web Developer
            </Typography>
            <Typography sx={{ px: 3 }}>
              <FormatQuoteIcon sx={{ verticalAlign: "middle", pr: 1 }} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
              tenetur quae quaerat ad velit ab hic tenetur.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Rating value={4} precision={0.5} readOnly />
            </Box>
          </Box>
        </Grid>
        {/* Second Testimonial */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Avatar
              alt="Lisa Cudrow"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              sx={{
                width: 150,
                height: 150,
                boxShadow: 1,
                borderRadius: "50%",
                marginBottom: 2
              }}
            />
            <Typography variant="h5" sx={{ mb: 3 }}>
              Lisa Cudrow
            </Typography>
            <Typography variant="h6" color="primary" sx={{ mb: 3 }}>
              Graphic Designer
            </Typography>
            <Typography sx={{ px: 3 }}>
              <FormatQuoteIcon sx={{ verticalAlign: "middle", pr: 1 }} />
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid commodi.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Rating value={5} readOnly />
            </Box>
          </Box>
        </Grid>
        {/* Third Testimonial */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Avatar
              alt="John Smith"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              sx={{
                width: 150,
                height: 150,
                boxShadow: 1,
                borderRadius: "50%",
                marginBottom: 2
              }}
            />
            <Typography variant="h5" sx={{ mb: 3 }}>
              John Smith
            </Typography>
            <Typography variant="h6" color="primary" sx={{ mb: 3 }}>
              Marketing Specialist
            </Typography>
            <Typography sx={{ px: 3 }}>
              <FormatQuoteIcon sx={{ verticalAlign: "middle", pr: 1 }} />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Rating value={4} precision={0.5} readOnly />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UsersReviews;
