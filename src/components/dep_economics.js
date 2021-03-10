import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";

import jiydegul from '../images/economics_img/Арпачиева Жийдегуль Шаршенбековна, преподаватель.jpg'
import aike from '../images/economics_img/Асанкожоева Айке Амангельдиевна, ст.преподаватель.jpg'
import aisalkin from '../images/economics_img/Асанова Айсалкын Асановна д.э.н., профессор.jpg'
import emilia from '../images/economics_img/Назарбекова Эмилия Умбетовна К.э.н., и.о.  доцента.jpg'
import jildiz from '../images/economics_img/Джылкычиева Жылдыз Сапарбековна к.э.н., доцент.jpg'
import mavluda from '../images/economics_img/Рахматова  Мавлюда Убайдуллаевна К.э.н., доцент.jpg'
import melis from '../images/economics_img/Тургунбаев Мелис Жусупжанович д.э.н. профессор.jpg'
import saltanat from '../images/economics_img/Омурова Салтанат Каировна д.э.н., профессор.jpg'
import ularbek from '../images/economics_img/Сыдыкбеков  Уларбек  Каныбекович Преподаватель.jpg'
import '../css/dep_economics.css'



    const useStyles = makeStyles({
        root: {
            maxWidth: 300,
            margin:"50px",
            fontSize:"25px",
            border: "1px solid #5889C4",


        },
        media: {
            objectFit:"contain"
        }


    });

    const DepEconomics = () => {
        const classes = useStyles()

        return (
            <div>
                <div className="container">
                    <div className="preFounder  animate__animated animate__fadeInUp  wow">
                        <h2 style={{ color: "#c49558"}}>Кафедра экономики и менеджмента</h2>
                        <h3 style={{ color: "#5889c4"}}>Научно-преподавательский состав</h3>
                    </div>
                    <div className="founder  animate__animated animate__fadeInUp  wow">
                        <Card className={classes.root} >
                            <CardActionArea>
                                <CardMedia className={classes.media}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="400"
                                    image={jiydegul}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Арпачиева Жийдегуль Шаршенбековна, преподаватель
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="400"
                                    image={aike}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Асанкожоева Айке Амангельдиевна, ст.преподаватель
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="350"
                                    image={aisalkin}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">

                                        Асанова Айсалкын Асановна д.э.н., профессор

                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="400"
                                    image={jildiz}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Джылкычиева Жылдыз Сапарбековна к.э.н., доцент
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="400"
                                    image={emilia}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Назарбекова Эмилия Умбетовна К.э.н., и.о.  доцента
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="400"
                                    image={saltanat}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Омурова Салтанат Каировна д.э.н., профессор
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia className={classes.media}
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="400"
                                        image={mavluda}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Рахматова  Мавлюда Убайдуллаевна К.э.н., доцент
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia className={classes.media}
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="400"
                                        image={ularbek}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Сыдыкбеков  Уларбек  Каныбекович Преподаватель
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia className={classes.media}
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="400"
                                        image={melis}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Тургунбаев Мелис Жусупжанович д.э.н. профессор
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>

                    </div>

                </div>
            </div>
        );
    };


export default DepEconomics;