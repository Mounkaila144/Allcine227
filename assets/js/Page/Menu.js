import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useEffect, useState} from "react";
import axios from "axios";
import {Backdrop, CircularProgress} from "@mui/material";
import PubCard from "../components/card/PubCard";
import {orange, pink, red} from "@mui/material/colors";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Menu() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
    const [pagecount, setpagecount] = useState([]);

    return (
        <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 12, sm: 12, md: 12}}>
            <Grid item xs={12} sm={12} md={12}>
                <Box>
                    <Grid container spacing={{xs: 1, md: 1}} columns={{xs: 12, sm: 12, md: 12}} alignContent={"center"}
                          justifyContent={'center'}>
                        <Grid item xs={10} sm={10} md={5}>
                            <IconButton aria-label="cart">
                                <MonetizationOnIcon sx={{fontSize: 50, marginTop: -2, color: orange[900]}}/>
                                <Box component="div"
                                     sx={{overflow: 'auto', fontSize: 32, marginBottom: 2, color: 'white'}}>
                                    Nos tarifs
                                </Box>
                            </IconButton>

                        </Grid>
                    </Grid>
                    <Card>
                        <CardContent
                            sx={{boxShadow: 3, bgcolor: pink[500], marginBottom: 2, justifyContent: 'center'}}>
                            👉🏾👉🏾 series<br/>
                            1 saison a 500f
                            2 saisons a 1000f
                            3 saisons a 1500f
                            🥳 a partir de 2000f,beneficiez d une saison bonus de votre choix.<br/>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent
                            sx={{boxShadow: 3, bgcolor: pink[500], marginBottom: 2, justifyContent: 'center'}}>
                            👉🏾👉🏾 films/animés<br/>
                            1 film a 200f ou 3 films a 500f.<br/>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent
                            sx={{boxShadow: 3, bgcolor: pink[500], marginBottom: 2, justifyContent: 'center'}}>
                            👉🏾👉🏾 mangas<br/>
                            40 épisodes a 500f<br/>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent
                            sx={{boxShadow: 3, bgcolor: pink[500], marginBottom: 2, justifyContent: 'center'}}>
                            <Box component="div" sx={{overflow: 'auto', fontSize: 22, marginBottom: 2, marginTop: 2}}>
                                🥳Si vous payez une clé USB ou carte mémoire,vous bénéficierez d'un remplissage
                                gratuit(De votre choix).
                            </Box>
                        </CardContent>
                    </Card>


                </Box>

            </Grid>
        </Grid>

    )
}