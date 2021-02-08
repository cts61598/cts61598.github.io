import React from "react"
import { Link } from "react-router-dom"
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from "@material-ui/core"

export default function Content() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={6}>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Link to="/hiking">
                        <Card>
                            <CardMedia style={{height: 200}} image="https://live.staticflickr.com/1585/26272401276_dc29ec203d_z.jpg" />
                            <CardContent style={{textAlign: "center"}}>
                                <Typography variant="h5">
                                    Hiking
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                
                
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Link to="/camping">
                        <Card>
                            <CardMedia style={{height: 200}} image="https://live.staticflickr.com/1585/26272401276_dc29ec203d_z.jpg" />
                            <CardContent style={{textAlign: "center"}}>
                                <Typography variant="h5">
                                    Camping
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                

                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Link to="/skiing">
                        <Card>
                            <CardMedia style={{height: 200}} image="https://live.staticflickr.com/1585/26272401276_dc29ec203d_z.jpg" />
                            <CardContent style={{textAlign: "center"}}>
                                <Typography variant="h5">
                                    Skiing
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>

                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Link to="/biking">
                        <Card>
                            <CardMedia style={{height: 200}} image="https://live.staticflickr.com/1585/26272401276_dc29ec203d_z.jpg" />
                            <CardContent style={{textAlign: "center"}}>
                                <Typography variant="h5">
                                    Biking
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>

                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Link to="/climbing">
                        <Card>
                            <CardMedia style={{height: 200}} image="https://live.staticflickr.com/1585/26272401276_dc29ec203d_z.jpg" />
                            <CardContent style={{textAlign: "center"}}>
                                <Typography variant="h5">
                                    Climbing
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>

                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Link to="/watersports">
                        <Card>
                            <CardMedia style={{height: 200}} image="https://live.staticflickr.com/1585/26272401276_dc29ec203d_z.jpg" />
                            <CardContent style={{textAlign: "center"}}>
                                <Typography variant="h5">
                                    Watersports
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Link to="/traveling">
                        <Card>
                            <CardMedia style={{height: 200}} image="https://live.staticflickr.com/1585/26272401276_dc29ec203d_z.jpg" />
                            <CardContent style={{textAlign: "center"}}>
                                <Typography variant="h5">
                                    Traveling
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>

            </Grid>
        </Container>
    )
}