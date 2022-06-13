import styled from "@emotion/styled"
import { COLOR_DARK_THIRD,COLOR_DARK_SECOND, COLOR_LIGHT_SECOND } from "src/constants/consts"
import { UserContext } from "../../../context/userContext"
import { useContext, useEffect, useState } from "react"
import { List } from "@mui/material"
import ContainerDark from "src/components/UI/Container"


const Container =styled(ContainerDark)({
    marginTop:"5px",
    width:"100%",
    height: "150px",
    borderRadius:"5px",
    boxShadow:"-1px 1px 2px .1px rgba(20,20,20,.5)",
    padding:"5px"
})



const Tittle = styled.p(({darkMode})=>({
    display:"flex",
    alignItems:"flex-start",
    color:darkMode===false ?COLOR_DARK_SECOND:"white"
}))
const signos=[
  
]
const sinSigno=[
  {
nombre:"TachiraA",
horas:[
  "1",
  "4:40",
  "7"
]
  },
  {
    nombre:"TachiraB",
    horas:[
      "1",
      "4:40",
      "7"
    ]
      },
      {
        nombre:"TachiraC",
        horas:[
          "1",
          "4:40",
          "7"
        ]
          },
          {
            nombre:"TripleGana",
            horas:[
              "1",
              "4",
              "7"
            ]
        },
        {
          nombre:"SuperGana",
          horas:[
            "1",
            "4",
            "7"
          ]
            },

            {
              nombre:"Ñapagana",
              horas:[
                "9",
                "10",
                "11",
                "12",
                "1",
                "3",
                "4",
                "5",
                "6",
                "7"

              ]
                },
                {
                  nombre:"Tropigana_Animales",
                  horas:[
                 "9",
                "10",
                "11",
                "12",
                "1",
                "3",
                "4",
                "5",
                "6",
                "7"
                  ]
                    },


]
const conSigno=[
  {
    nombre:"triple_gana",
    horas:[
      "1",
      "4",
      "7"
    ]
  },
  {
    nombre:"Triple_Zodiacal",
    horas:[
      "1",
      "4:40",
      "7"
    ]
  },
  {
    nombre:"SuperGana 4 cifras",
    horas:[
      "1",
      "4",
      "7"
    ]
  },
]
const Cuatro_cifras=[
  {
    nombre:"superGana",
    horas:[
      "1",
      "4",
      "7"
    ]
  },
  {
    nombre:"TolimaNoche",
    horas:[
      "8",
    ]
  },
  {
    nombre:"CundinamarcaNoche",
    horas:[
      "8",
    ]
  },
  {
    nombre:"DoradoDia",
    horas:[
      "2",
    ]
  },
  {
    nombre:"MotilonDia",
    horas:[
      "3",
    ]
  },
  {
    nombre:"MotilonNoche",
    horas:[
      "8",
    ]
  },
  {
    nombre:"AstrolunaNoche",
    horas:[
      "8",
    ]
  },
  {
    nombre:"AstrosolDia",
    horas:[
      "3",
    ]
  },
  {
    nombre:"CafeteritoDia",
    horas:[
      "3",
    ]
  },
  {
    nombre:"CafeteritoNoche",
    horas:[
      "8",
    ]
  },
  {
    nombre:"ChonticoDia",
    horas:[
      "3",
    ]
  },
  {
    nombre:"ChonticoNoche",
    horas:[
      "8",
    ]
  },
  {
    nombre:"PaisitaDia",
    horas:[
      "3",
    ]
  },
  {
    nombre:"PaisitaNoche",
    horas:[
      "8",
    ]
  },
  {
    nombre:"CulonaDia",
    horas:[
      "3",
    ]
  },
  {
    nombre:"CulonaNoche",
    horas:[
      "8",
    ]
  },
  {
    nombre:"SinuanoDia",
    horas:[
      "3",
    ]
  },
  {nombre:"SinuanoNoche",
  horas:[
    "8",
  ]
  },
]
const Animalitos=[
  {
    nombre:"TropiGana",
    horas:[
      "9",
      "10",
      "11",
      "12",
      "1",
      "3",
      "4",
      "5",
      "6",
      "7",
    ]
  },
  {
    nombre:"LottoActivo",
    horas:[
      "9",
      "10",
      "11",
      "12",
      "1",
      "3",
      "4",
      "5",
      "6",
      "7",
    ]
  },
  {
    nombre:"LaGranjita",
    horas:[
      "9",
      "10",
      "11",
      "12",
      "1",
      "3",
      "4",
      "5",
      "6",
      "7",
    ]
  },
  {
    nombre:"GranjaMillonaria",
    horas:[
      "9",
      "10",
      "11",
      "12",
      "1",
      "3",
      "4",
      "5",
      "6",
      "7",
    ]
  },
 ]
const ListLotery =()=>{
    const {darkMode,lotery}=useContext(UserContext)
    const [Lotery,setLotery]=useState([])
    useEffect(()=>{

    lotery===1&&setLotery(sinSigno)
    lotery===2&&setLotery(conSigno)
    lotery===3&&setLotery(Cuatro_cifras)
    lotery===4&&setLotery(Animalitos)
  
    },[lotery])
    console.log(Lotery)
    return(
        <>
        <Container>
        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 340,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {
      Lotery?.map((item,sectionId) => (
        <li 
        style={{
            display:"flex",
            alignItems:"flex-start $",
            paddingLeft:"15px",
            borderBottom:`solid 1px ${darkMode===true?"rgb(100,100,100)":"rgb(200,200,200)"}`
        }}
        key={`section-${sectionId}`}>
          <ul>
           <Tittle
            darkMode={darkMode}
           >
               {item.nombre}
           </Tittle>
           
          </ul>
        </li>
      ))
      }

      
    </List>
        </Container>


      </>
    )
    
}
export default ListLotery