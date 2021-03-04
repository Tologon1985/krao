import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {Icon} from "react-icons-kit";
import {filePdf} from 'react-icons-kit/icomoon/filePdf'
import '../css/matriculant.css'
import mat_img from '../images/mat_img/mat.JPG'
import mat1_img from '../images/mat_img/mat1.jpg'
import mat2_img from '../images/mat_img/mat2.JPG'
import mat3_img from '../images/mat_img/mat3.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
export default function SimpleAccordion() {
    const classes = useStyles();

    return (

        <div className="Container">
            <h2 className="zaglavie">Абитуриенту</h2>

            <div className="flex">
                <img className="mat" src={mat_img} alt="mat-img" />
            <p className="p1">Для абитуриентов.
                Прием в КРАО на все формы обучения осуществляется по результатам общереспубликанского тестирования.
                Для абитуриента, желающего поступить в КРАО по всем формам обучения (очная, заочная, очно-заочная), обязательным является основной тест, наличие профилирующего предметного теста дает преимущественное право абитуриенту при зачислении на соответствующие направления.
                Конкурс на поступление проходит непосредственно в «Кыргызско-Российской академии образования»
                К конкурсу допускаются только те абитуриенты, которые получили по основному тесту  баллы выше порогового.
                В 2015 году Министерством образования и науки КР установлен единый пороговый балл для поступления на все формы обучения по основному тесту 110 баллов по каждому предметному тесту 60 баллов.
            </p>
            </div>
            <div className="flex">
                <p className="p2">
                К конкурсу на специальности и направления (кроме медицинских специальностей), требующие дополнительных
                    предметных тестов, могут быть допущены абитуриенты, не сдававшие данные тесты, но имеющие по основному
                    тесту баллы выше порогового. При зачислении на данные специальности приоритетным правом пользуются
                    абитуриенты, имеющие результаты предметных тестов. Выпускникам общеобразовательных школ, подтвердившим
                    получение аттестата о среднем общем образовании с отличием в Национальном центре тестирования при
                    МОН КР и получившим по основному и предметным тестам баллы выше установленных пороговых баллов,
                    к результатам каждого предметного теста будут прибавлять по двадцать баллов.
                    Процедура зачисления предусматривает наличие двух или трех туров.  Правила конкурсного зачисления во
                    всех турах одинаковы. Абитуриент, прошедший по конкурсу, должен в двухдневный срок, подтвердить свое
                    желание учиться на данной специальности, иначе его место считается вакантным.
                </p>
                    <img className="mat1" src={mat1_img} alt="mat1-img" />
            </div>
            <div className="flex">
                <img className="mat2" src={mat2_img} alt="mat2-img" />
                <p className="p3">Если после первого тура в Академии останутся вакантные места, будет проведен второй тур зачисления. Третий тур проводится только с разрешения Министерства образования и науки КР, и для участия в нем абитуриент предоставляет сам сертификат.
                На заочную и вечернюю форму обучения сроки зачисления устанавливаются вузом самостоятельно.
                Талоны сертификата для контрактного обучения абитуриент может использовать по своему желанию.
                На контрактное обучение конкурс проводится без учета категорий абитуриентов.
                Лица, поступающие в вуз на базе высшего образования или на базе среднего профессионального образования
                    по профилю на ускоренные программы обучения, зачисляются в вуз на основе результатов аттестационных
                    испытаний, проводимых Академией самостоятельно.
                </p>
            </div>
            <div className="flex">
                <div className="p4">
                <ul><strong>Перечень документов, подаваемых абитуриентами при поступлении в  ВУЗ:</strong></ul>
                <li>паспорт;</li>
                <li>сертификат общереспубликанского тестирования текущего года;</li>
                <li>фотографии (3х4 - 6 штук);</li>
                <li>военный билет или приписное свидетельство (для военнообязанных).</li>
                <li>Дополнительные документы представляются абитуриентом, если он претендует на льготы, установленные законодательством Кыргызской Республики.</li>
                </div>
                <img className="mat3" src={mat3_img} alt="mat3-img" />
            </div>

            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}><h4>Документы для Абитуриента</h4></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div>
                                <a href="https://drive.google.com/file/d/1dQJoL84_kBqfaT73CZ0IwiJ2xpoJ9U2d/view?usp=sharing">
                                    <div style={{ color: '#861e24' }}>
                                        <Icon size={32} icon={filePdf}/>
                                        План приема
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://drive.google.com/file/d/1jbVpn3qp2WsfW4acmhe1k8PVMsBEyRqB/view?usp=sharing">
                                    <div style={{ color: '#861e24' }}>
                                        <Icon size={32} icon={filePdf}/>
                                        Правила приема
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://drive.google.com/file/d/1WDlIFO2shU1kypnQbHUKwhRXEof1wZB9/view?usp=sharing">
                                    <div style={{ color: '#861e24' }}>
                                        <Icon size={32} icon={filePdf}/>
                                        Прейскурант
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://drive.google.com/file/d/1CxXrutcxW1oA7Q74l-6qJ8q0gFf-Zywt/view?usp=sharing">
                                    <div style={{ color: '#861e24' }}>
                                        <Icon size={32} icon={filePdf}/>
                                        Приказ о пороговых баллах
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://drive.google.com/file/d/1sOpfLFJYdVsqOl1_op6WekSgcpjzCAxx/view?usp=sharing">
                                    <div style={{ color: '#861e24' }}>
                                        <Icon size={32} icon={filePdf}/>
                                        Приказ об организации приема абитуриентов
                                    </div>
                                </a>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

