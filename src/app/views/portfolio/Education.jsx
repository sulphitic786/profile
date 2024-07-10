import {
  Card,
  Grid,
  styled,
  useTheme,
  Box,
  Typography,
  Icon,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { Fragment } from "react";
import { Breadcrumb } from "../../components";
import { H4, H5, H6 } from "../../components/Typography";
// import Campaigns from './shared/Campaigns';
// import DoughnutChart from './shared/Doughnut';
// import RowCards from './shared/RowCards';
// import StatCards from './shared/StatCards';
// import StatCards2 from './shared/StatCards2';
// import TopSellingTable from './shared/TopSellingTable';
// import UpgradeCard from './shared/UpgradeCard';

const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const Container = styled("div")(({ theme }) => ({
  margin: "20px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const useStyles = styled((theme) => ({
  section: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  image: {
    maxWidth: "100%",
    height: "auto"
  }
}));

const Education = () => {
  const { palette } = useTheme();
  const classes = useStyles();

  return (
    <Fragment>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: "Profile", path: "/portfolio/about" }, { name: "Education" }]}
          />
        </Box>
        <ContentBox className="about">
          <section id="resume" className="resume">
            <div className="section-title">
              <Typography style={{ fontWeight: "bold" }} variant="h5">
                Education / Experience
              </Typography>
              <Typography variant="body1">
                Always seeking a position in a highly competitive area of challenge, utilization,
                and abilities on the way to success for the organization to earn more and more
                knowledge and experience.
              </Typography>
            </div>

            <Grid container spacing={3}>
              <Grid item md={6} lg={6}>
                <div data-aos="fade-up">
                  <Typography variant="h4" className="resume-title">
                    Education / Certifications
                  </Typography>
                  {/* <div className="resume-item pb-0">
                    <Typography variant="h4">Waseem Qasim</Typography>
                    <Typography variant="body1" component="p">
                      <em>
                        Innovative and deadline-driven Frontend Web Developer with 4+ years of
                        experience designing and developing user-centered platforms from initial
                        concept to final, polished deliverables.
                      </em>
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText>
                          <b>Address:</b> Islamabad Pakistan
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemText>
                          <b>Phone:</b> +92324 4929494
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemText>
                          <b>Email:</b> wqasimg@gmail.com
                        </ListItemText>
                      </ListItem>
                    </List>
                  </div> */}
                </div>

                {/* Education and Internship sections */}
                <div className="resume-item">
                  <H4 style={{ fontSize: "12px" }}>Master In Computer Science</H4>
                  <H5 style={{ fontSize: "11px" }}>Aug/2017 - Aug/2019</H5>
                  <H6>
                    <em>University of Agriculture Faisalabad Pakistan</em>
                  </H6>
                </div>

                <div className="resume-item">
                  <H4 style={{ fontSize: "12px" }}>Bachelor In Computer Science</H4>
                  <H5 style={{ fontSize: "11px" }}>Aug/2014 - Aug/2016</H5>
                  <H6>
                    <em>The University of Punjab</em>
                  </H6>
                </div>

                <div className="resume-item">
                  <H4 style={{ fontSize: "12px" }}>Web Development (Certification)</H4>
                  <H5 style={{ fontSize: "11px" }}>jul/2019 - Dec/2019</H5>
                  <H6>
                    <em>The University of Lahore</em>
                  </H6>
                  <p>A helpful course about fullstack web development using backend in PHP.</p>
                  <li>Designing focus on front-end. </li>
                  <li>Development and implementation of the designs. </li>
                  <li>Focus on the modern programming technologies. </li>
                  <li>Supervised by professionals for the assessment of all development. </li>
                </div>

                <div className="resume-item">
                  <H4 style={{ fontSize: "12px" }}>
                    Web Developer Internship(Mussawar I.T Solutions)
                  </H4>
                  <H5 style={{ fontSize: "11px" }}>Dec/2019 - Feb/2020</H5>
                  <H6>
                    <em>Jeff Heights Near Hafeez Center Liberty Lahore </em>
                  </H6>
                  <ul>
                    <li>
                      Lead by the design, development, and implementation of the layout, and
                      production materials.
                    </li>
                    <li>
                      Collaborate with 3 members of the design team and counsel on all aspects of
                      the project.{" "}
                    </li>
                    <li>
                      Supervised by seniors in order to ensure quality and accuracy of the design
                    </li>
                    <li>Oversee the efficient use of production project budgets.</li>
                    <li>Stay up-to-date with emerging technology.</li>
                  </ul>
                </div>
              </Grid>

              <Grid item md={6} lg={6}>
                <div data-aos="fade-up" data-aos-delay={100}>
                  <Typography variant="h3" className="resume-title">
                    Professional Experience
                  </Typography>
                  {/* <div className="resume-item">
                    <Typography variant="h4">ReactJs/Frontend Developer(Multi-Telesoft)</Typography>
                    <Typography variant="h5">Nov/2021 - Mar/2023</Typography>
                    <Typography variant="body1" component="p">
                      <em>Islamabad</em>
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText>
                          Supporting development, maintaining, and updating web portals and
                          dashboards as well websites.
                        </ListItemText>
                      </ListItem>
                    </List>
                  </div> */}
                  {/* Other professional experience */}
                  <div className="resume-item">
                    <H4 style={{ fontSize: "12px" }}>ReactJs/Frontend Developer(Multi-Telesoft)</H4>
                    <H5 style={{ fontSize: "11px" }}>Nov/2021 - Mar/2023</H5>
                    <H6>
                      <em> G-10/1 Near High Court, Islamabad </em>
                    </H6>
                    <ul>
                      <li>
                        Supporting development, maintaining, and updating web portals and dashboards
                        as well websites.
                      </li>
                      <li>Assisting in deployment and development of websites. </li>
                      <li>Writing codes for web based Solutions. </li>
                      <li>Technical documentation and presentation.</li>
                      <li>Troubleshooting websites problems.</li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <H4 style={{ fontSize: "12px" }}>ReactJs Developer(NextLogixs)</H4>
                    <H5 style={{ fontSize: "11px" }}>Feb/2020 - Sep/2021</H5>
                    <H6>
                      <em> Link Road, Model Town Lahore </em>
                    </H6>
                    <ul>
                      <li>
                        Supporting development, maintaining, and updating web portals as well
                        websites.
                      </li>
                      <li>Assisting in deployment and development of websites. </li>
                      <li>Writing codes for web based Solutions. </li>
                      <li>Technical documentation and presentation.</li>
                      <li>Troubleshooting websites problems .</li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <H4 style={{ fontSize: "12px" }}>Web Developer in Micrologix</H4>
                    <H5 style={{ fontSize: "11px" }}>Oct/2018 - Nov/2019</H5>
                    <H6>
                      <em>Garden Town Opposite to UAF Gate Faisalabad</em>
                    </H6>
                    <ul>
                      <li>
                        Developed numerous front end programs (Commerce, Blogs,Online Store,
                        presentations, and advertisements).
                      </li>
                      <li>
                        Recommended and consulted with clients on the most appropriate web
                        development.
                      </li>
                      <li>
                        Create designs and proposals a month for clients and account managers.
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
            </Grid>
          </section>
        </ContentBox>
      </Container>
    </Fragment>
  );
};

export default Education;




// import React, { useEffect, useState, useMemo } from 'react';
// import { Col, Row, Button, Card, CardBody, CardHeader, Input, Table } from 'reactstrap';
// import { selectThemeColors } from '@utils'
// import { useDispatch } from 'react-redux'
// import { setTitle } from '@store/navbar'
// import "./styles.css"
// import { Search, RefreshCw, ChevronDown } from 'react-feather'
// import DataTable from 'react-data-table-component'
// import '@styles/react/libs/tables/react-dataTable-component.scss'
// import Flatpickr from 'react-flatpickr'
// import { ClipLoader } from "react-spinners";
// import axios from 'axios';
// import jwtDefaultConfig from "@src/@core/auth/jwt/jwtDefaultConfig"
// import helper from '@src/@core/helper';
// import Select from 'react-select';
// import MonitoringSwitch from '../fleet-management/Components/Monitoring/MonitoringSwitch';
// // import { AiOutlineSearch } from 'react-icons/ai';
// // import { DateRangePicker } from 'rsuite';
// import SkipMap from './SkipMap';
// import { getUserData } from '@utils'
// import '@styles/react/libs/flatpickr/flatpickr.scss'



// const SkipDashboard = () => {

//     const dispatch = useDispatch();
//     dispatch(setTitle('Skip Dashboard'));

//     useEffect(() => {
//         getData()
//     }, []);

//     const [overlay, setOverlay] = useState(false);
//     const [data, setdata] = useState([]);
//     const [allAddresses, setAllAddresses] = useState([])
//     const [customers, setcustomers] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [perPage, setPerPage] = useState(50);
//     const [totalRows, setTotalRows] = useState(0);
//     const [levels, setlevels] = useState([]);
//     const [search, setsearch] = useState({
//         customer: '',
//         level: [],
//         address_id: [],
//         submitted_on: {
//             to: '',
//             from: '',
//             date: ""
//         }
//     });

//     const levelsOptions = [
//         {label: "0-10", value: 1},
//         {label: "10-20", value: 2},
//         {label: "20-30", value: 3},
//         {label: "30-40", value: 4},
//         {label: "40-50", value: 5},
//         {label: "50-60", value: 6},
//         {label: "60-70", value: 7},
//         {label: "70-80", value: 8},
//         {label: "80-90", value: 9},
//         {label: "90-100", value: 10},
//     ]

//     const getData = (reset = false) => {
//         const addressIds = search.address_id?.map(address => String(address?.id));
//         const level_Ids = search?.level.map(item => item.value);
//         setOverlay(true)
//         axios.get(`${jwtDefaultConfig.adminBaseUrl}/skips?data={"skip_level_id":[${level_Ids}],"customer_id":"${!reset && helper.isObject(search.customer) ? search.customer.value : ''}" ,"address_id":[${addressIds.join(',')}],"to":"${!reset && helper.isObject(search.submitted_on) ? search.submitted_on.to : ''}","from":"${(!reset && helper.isObject(search.submitted_on) ? search.submitted_on.from : '')}"}`, {
//         }).then(async (res) => {
//             console.log("skips", res.data)
//             helper.redirectToLogin(helper.isObject(res.data) ? res.data.code : 201)
//             if (res.status && res.status === 200) {
//                 prepareCustomerDropdown(res.data.customers)
//                 prepareSkipLevelDropdown(res.data.skip_levels)
//                 setAllAddresses(res.data.addresses)
//                 await setdata(res.data.skips)
//                 setOverlay(false)
//                 // setsearch({
//                 //     customer: '',
//                 //     level: '',
//                 //     address_id: [],
//                 //     submitted_on: {
//                 //         to: '',
//                 //         from: '',
//                 //         date: ""
//                 //     }
//                 // })
//             } else {
//                 helper.toastNotification('Unable to process request.', "FAILED_MESSAGE");
//                 setOverlay(false)
//             }
//         })
//             .catch((error) => {
//                 setOverlay(false)
//                 console.log(error, 'error')
//                 helper.toastNotification('Unable to get Data', "FAILED_MESSAGE");
//             });
//     }

//     const resetData = async () => {
//         await setsearch({
//             customer: '',
//             level: [],
//             address_id: [],
//             submitted_on: {
//                 to: '',
//                 from: '',
//                 date: ""
//             }
//         })
//         getData(true)
//     }

//     // const handleClick = async (row, e) => {
//     //     console.log("row, e", row, e)
//     //     // let vehicles = [...this.state.data]
//     //     // let veh = {} e.target.checked
    
//     //     // let foundIdx = -1
//     //     // let all = true
//     //     // vehicles.map((vehicle, i) => {
//     //     //   if (vehicle.vehicle_id == row.vehicle_id) {
//     //     //     foundIdx = i
//     //     //     veh = { ...vehicle }
//     //     //     veh.isShownOnMap = !vehicle.isShownOnMap
    
//     //     //     if (!veh.isShownOnMap) {
//     //     //       all = false
//     //     //     }
//     //     //   } else {
//     //     //     if (!vehicle.isShownOnMap) {
//     //     //       all = false
//     //     //     }
//     //     //   }
//     //     // })
    
//     //     // if (foundIdx > -1) {
//     //     //   vehicles.splice(foundIdx, 1, veh)
//     //     // }
    
//     //     // await this.setState({ data: vehicles, showAll: all })
//     //   }

//     const handleClick = async (row, e) => {
//         console.log("row, e", row, e);
    
//         if (e.target.checked) {
//             // If checkbox is checked, add the row to data
//             setdata([...data, { ...row, checked: true }]);
//         } else {
//             // If checkbox is unchecked, remove the row from data
//             const newData = data.filter(item => item.skip_id !== row.skip_id);
//             setdata(newData);
//         }
//         console.log("data", data);
//     }
    
    
    
//     const handleShowAll = (e) => {
//         let vehicles = [...this.state.data]
    
//         for (let i = 0; i < vehicles.length; i++) {
//           let veh = { ...vehicles[i] }
//           veh.isShownOnMap = e.target.checked
    
//           vehicles.splice(i, 1, veh)
//         }
    
//         this.setState({ data: vehicles, showAll: e.target.checked })
//       }

//     const columns = [
//         {
//           name: (
//             <div
//               className="form-switch form-check-primary"
//               style={{ cursor: 'pointer' }}
//             >
//               <Input
//                 type="switch"
//                 id="switch-primary"
//                 name="primary"
//                 onChange={(e) => handleShowAll(e)}
//                 style={{ cursor: 'pointer' }}
//                 // checked={this.state && this.state.showAll}
//                 defaultChecked
//               />
//             </div>
//           ),
    
//           cell: (item, index, cell) => {
//             return <MonitoringSwitch data={item} handleClick={handleClick} />
//           },
//         },
//         {
//           name: 'Asset Code',
//           sortable: true,
//           selector: (item) => item?.asset_inventory,
//           cell: (item, index, cell) => {
//             return <span>{item?.asset_inventory?.title}</span>
//             // return <MonitoringPopover1 data={item} />
//           },
//         },
//         {
//             name: "Skip Level",
//             sortable: true,
//             // minWidth: '140px',
//             sortField: 'Skip Level',
//             selector: row => {return (row?.current_skip_level?.skip_level)},
//             cell: (row) => (
//                 <div className='d-flex justify-content-left align-items-center '>
//                     <div className='d-flex flex-column'>
//                         <span className='fw-bold ' >
//                             {row?.current_skip_level?.skip_level ?? "0"}
//                         </span>
//                     </div>
//                 </div>
//             )
//         },
//         {
//             name: "Customer",
//             sortable: true,
//             // minWidth: '140px',
//             sortField: 'Customer',
//             selector: row => {return (row?.customer?.name)},
//             cell: (row) => (
//                 <div className='d-flex justify-content-left align-items-center '>
//                     <div className='d-flex flex-column'>
//                         <span className='fw-bold ' >
//                             {row?.customer?.name ?? "-"}
//                         </span>
//                     </div>
//                 </div>
//             )
//         },
//       ]

//     const addressOptions = useMemo(() => {
//         return allAddresses?.map((el) => ({
//             label: el.address_title,
//             id: el.address_id,
//             value: el.address_id
//         })
//         )
//     }, [allAddresses])

//     const onCurrPageChange = async (page) => {
//         setCurrentPage(page);
//     };

//     const handlePerRowsChange = (newPerPage, page) => {
//         setPerPage(newPerPage);
//         setCurrentPage(page);
//     }

//     const prepareCustomerDropdown = (data) => {
//         let list = []
//         for (let i = 0; i < data.length; i++) {
//             list.push({ label: data[i].name, value: data[i].customer_id })
//         }
//         setcustomers(list)
//         return list;
//     }

//     const prepareSkipLevelDropdown = (data) => {
//         let list = []
//         for (let i = 0; i < data.length; i++) {
//             list.push({
//                 label: data[i].skip_level,
//                 value: data[i].skip_level_id,
//                 color: data[i].color,
//                 skips_count: data[i].skips_count
//             })
//         }
//         setlevels(list)
//         return list;
//     }


//     return (
//         <div style={{ marginBottom: '20px' }}>
//             {overlay && (
//                 <div
//                 style={{
//                     position: 'fixed',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     background: 'rgba(0, 0, 0, 0)',
//                     zIndex: 999999,
//                 }}
//                 >
//                 <ClipLoader
//                     css={`
//                     position: fixed;
//                     top: 40%;
//                     left: 40%;
//                     right: 40%;
//                     bottom: 20%;
//                     z-index: 999999;
//                     display: block;
//                     `}
//                     size={"200px"}
//                     color={"#196633"}
//                     height={100}
//                 />
//                 </div>
//                 )}
//             <Row className='g-0 match-height' >
//             <Col className='border-right-no-radius' xl="3">
//             <Card className='' style={{ maxHeight: '76vh', overflowY:'scroll', overflowX: 'clip' }}>
//             <CardHeader className='p-25'>
//                 <Row className="ms-auto">
//                   <Col
//                     className="d-flex align-items-end justify-content-end"
//                     md="12"
//                     sm="12"
//                   >
//                     <Input
//                       className="dataTable-filter "
//                       type="text"
//                       id="search-input"
//                     //   value={this.state.searchValue}
//                     //   onChange={this.handleFilter}
//                       placeholder='Quick Search'
//                     />
//                   </Col>
//                 </Row>
//               </CardHeader>
//                 <CardBody className='px-0'>
//                 <div className="react-dataTable monitoring-table">
//                   <DataTable
//                     dense
//                     responsive
//                     striped
//                     fixedHeader
//                     fixedHeaderScrollHeight={'52vh'}
//                     highlightOnHover
//                     pagination
//                     paginationServer
//                     paginationTotalRows={totalRows}
//                     paginationPerPage={perPage}
//                     columns={columns}
//                     sortIcon={<ChevronDown size={10} />}
//                     onChangePage={onCurrPageChange}
//                     paginationRowsPerPageOptions={[50, 100, 200, 300, 400, 500]}
//                     data={data}
//                     // data={
//                     //   this.state.searchValue.length
//                     //     ? this.state.filteredData
//                     //     : this.state.data
//                     // }
//                     className="react-dataTable"
//                     onChangeRowsPerPage={handlePerRowsChange}
//                   />

//                 </div>
//                 </CardBody>
//             </Card>
//             </Col>
//                 <Col className='border-right-no-radius' xl="7">
//                     <Card>
//                         <CardBody>
//                             <SkipMap data={data} mapKey={getUserData().map_key} />
//                         </CardBody>
//                     </Card>
//                 </Col>
//                 <Col className='border-left-no-radius no-shadow' xl="2">
//                     <Card className='no-shadow'>
//                         <CardBody>
//                             <Table responsive>
//                                 <thead>
//                                     <tr>
//                                         <th style={{ width: '100px' }}>Skip Level</th>
//                                         <th style={{ paddingLeft: 0, paddingRight: 0 }}>Skips Count</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         levels.length && levels.map((item, index) => (
//                                             <tr key={index} className={index % 2 !== 0 ? `oddRowColor` : 'evenRowColor'}>
//                                                 <td>
//                                                     <svg style={{ marginRight: '5px', width: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//                                                         <path style={{ fill: item.color }} className="svgIcon" d="M560 160c10.38 0 17.1-9.75 15.5-19.88l-24-95.1C549.8 37 543.3 32 536 32h-98.88l25.62 128H560zM272 32H171.5L145.9 160H272V32zM404.5 32H304v128h126.1L404.5 32zM16 160h97.25l25.63-128H40C32.75 32 26.25 37 24.5 44.12l-24 95.1C-2.001 150.2 5.625 160 16 160zM560 224h-20L544 192H32l4 32H16C7.25 224 0 231.2 0 240v32C0 280.8 7.25 288 16 288h28L64 448v16C64 472.8 71.25 480 80 480h32C120.8 480 128 472.8 128 464V448h320v16c0 8.75 7.25 16 16 16h32c8.75 0 16-7.25 16-16V448l20-160H560C568.8 288 576 280.8 576 272v-32C576 231.2 568.8 224 560 224z" />
//                                                     </svg>
//                                                     <span>{item.label}</span>
//                                                 </td>
//                                                 <td>{item.skips_count}</td>
//                                             </tr>
//                                         ))
//                                     }
//                                 </tbody>
//                             </Table>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//         </div>
//     );
// }

// export default SkipDashboard;