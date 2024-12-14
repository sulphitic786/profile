import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, IconButton, Box, Avatar, Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const UsersReviews = ({ reviews }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (reviews.length) setList(reviews); // Fetch data when the component mounts
  }, [reviews]);

  const testimonials = [
    {
      name: "John Smith",
      location: "United States",
      date: "23-11-2024",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      rating: 4.5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
    },
    {
      name: "John Smith",
      location: "United States",
      date: "23-11-2024",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      rating: 5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
    },
    {
      name: "John Smith",
      location: "United States",
      date: "23-11-2024",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      rating: 4.9,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
    },
    {
      name: "John Smith",
      location: "United States",
      date: "23-11-2024",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      rating: 4,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      totalRating: 5
    }
    // Add more testimonial objects here...
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} xl={8} textAlign="center">
          <Typography variant="h4" sx={{ mb: 4 }}>
            Testimonials
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, pb: 2, mbMd: 5, pbMd: 0 }}>
            Over the years, I have received incredible reviews and feedback from clients worldwide,
            including Fiverr, as well as local and international projects. These testimonials
            reflect my dedication to delivering high-quality work, meeting deadlines, and ensuring
            client satisfaction. Whether it's crafting stunning web designs, developing robust
            applications, or providing tailored solutions, my clients consistently appreciate the
            value and professionalism I bring to every project.
          </Typography>
        </Grid>
      </Grid>
      <Grid container gap={0} justifyContent="center">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            960: { slidesPerView: 2 },
            1280: { slidesPerView: 3 }
          }}
        >
          {list &&
            testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Grid item xs={12} boxShadow={2}>
                  <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Avatar
                      alt={testimonial?.name}
                      src={testimonial?.image}
                      sx={{
                        width: 150,
                        height: 150,
                        boxShadow: 1,
                        borderRadius: "50%",
                        margin: 2,
                        marginX: "auto"
                      }}
                    />
                    <Typography variant="h5" sx={{ mb: 0 }}>
                      {testimonial?.name}
                    </Typography>
                    <Typography variant="body" color="primary">
                      {testimonial?.location}
                    </Typography>
                    <br />
                    <Typography variant="body" color="info" sx={{ mb: 5 }}>
                      {testimonial?.date}
                    </Typography>
                    <Typography sx={{ px: 3, mt: 3 }}>
                      <FormatQuoteIcon sx={{ pr: 0, fontSize: "15px" }} />
                      {testimonial?.message}
                      <FormatQuoteIcon sx={{ pr: 0, fontSize: "15px" }} />
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                      <Rating value={testimonial?.rating} precision={0.5} readOnly />
                      <Box sx={{ ml: 1, mt: 0.1, mb: 2, fontWeight: "bold", fontSize: "18px" }}>
                        {testimonial?.rating}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </SwiperSlide>
            ))}
        </Swiper>
      </Grid>
    </Container>
  );
};

export default UsersReviews;
