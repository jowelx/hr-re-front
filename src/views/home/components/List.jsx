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

const sinSigno=[
  {
nombre:"TachiraA",
horas:{
  pm:["1:00 PM",
    "4:40 PM",
    "7:00 PM"]
  }
  },
  {
    nombre:"TachiraB",
    horas:{
      pm:["1:00 PM",
        "4:40 PM",
        "7:00 PM"]
      }
      },
      {
        nombre:"TachiraC",
        horas:{
          pm:["1:00 PM",
            "4:40 PM",
            "7:00 PM"]
          }
          },
          {
            nombre:"TripleGana",
            horas:{
              pm:["1:00 PM",
                "4:00 PM",
                "7:00 PM"]
              }
        },
        {
          nombre:"SuperGana",
          horas:{
            pm:["1:00 PM",
              "4:00 PM",
              "7:00 PM"]
            }
            },

            {
              nombre:"Ñapagana",
              horas:{
                am:["9:00 AM",
                  "10:00 AM",
                  "11:00 AM"
                ],

                pm:["12:00 PM",
                  "1:00 PM",
                  "2:00 PM",
                  "3:00 PM",
                  "4:00 PM",
                  "5:00 PM",
                  "6:00 PM",
                  "7:00 PM",]
                }
                },
                {
                  nombre:"Tropigana_Animales",
                  horas:{
                    am:["9:00 AM",
                      "10:00 AM",
                      "11:00 AM"
                    ],
    
                    pm:["12:00 PM",
                      "1:00 PM",
                      "2:00 PM",
                      "3:00 PM",
                      "4:00 PM",
                      "5:00 PM",
                      "6:00 PM",
                      "7:00 PM",]
                    }
                    },


]
const conSigno=[
  {
    nombre:"triple_gana",
    horas:{
      pm:["1:00 PM",
        "4:00 PM",
        "7:00 PM"]
      }
  },
  {
    nombre:"Triple_Zodiacal",
    horas:{
      pm:["1:00 PM",
        "4:40 PM",
        "7:00 PM"]
      }
  },
  {
    nombre:"SuperGana 4 cifras",
    horas:{
      pm:["1:00 PM",
        "4:00 PM",
        "7:00 PM"]
      }
  },
]
const Cuatro_cifras=[
  {
    nombre:"superGana",
    horas:{
    pm:["1:00 PM",
      "4:00 PM",
      "7:00 PM"]
    }
  },
  {
    nombre:"TolimaNoche",
    horas:{
      pm:["8:00 PM"]
      }
  },
  {
    nombre:"CundinamarcaNoche",
    horas:{
      pm:["8:00 PM"]
      }
  },
  {
    nombre:"DoradoDia",
    horas:{
      pm:["2:00 PM"]
      }
  },
  {
    nombre:"MotilonDia",
    horas:{
      pm:["3:00 PM"]
      }
  },
  {
    nombre:"MotilonNoche",
    horas:{
      pm:["8:00 PM"]
      }
  },
  {
    nombre:"AstrolunaNoche",
    horas:{
      pm:["8:00 PM"]
      }
  },
  {
    nombre:"AstrosolDia",
    horas:{
      pm:["3:00 PM"]
      }
  },
  {
    nombre:"CafeteritoDia",
    horas:{
      pm:["3:00 PM"]
      }
  },
  {
    nombre:"CafeteritoNoche",
    horas:{
      pm:["8:00 PM"]
      }
  },
  {
    nombre:"ChonticoDia",
    horas:{
      pm:["3:00 PM"]
      }
  },
  {
    nombre:"ChonticoNoche",
    horas:{
      pm:["8:00 PM"]
      }
  },
  {
    nombre:"PaisitaDia",
    horas:{
      pm:["3:00 PM"]
      }
  },
  {
    nombre:"PaisitaNoche",
    horas:{
      pm:["8:00 PM"]
      }
  },
  {
    nombre:"CulonaDia",
    horas:{
      pm:["3:00 PM"]
      }
  },
  {
    nombre:"CulonaNoche",
    horas:{
      pm:["8:00 PM"]
      }
  },
  {
    nombre:"SinuanoDia",
    horas:{
      pm:["3:00 PM"]
      }
  },
  {nombre:"SinuanoNoche",
  horas:{
    pm:["8:00 PM"]
    }
  },
]
const Animalitos=[
  {
    nombre:"TropiGana",
    horas:{
    am:["9:00 AM",
      "10:00 AM",
      "11:00 AM"],

    pm:["12:00 PM",
      "1:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",]
    }
  },
  {
    nombre:"LottoActivo",
    horas:{
      am:["9:00 AM",
        "10:00 AM",
        "11:00 AM"],
  
      pm:["12:00 PM",
        "1:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",]
      }
  },
  {
    nombre:"LaGranjita",
    horas:{
      am:["9:00 AM",
        "10:00 AM",
        "11:00 AM"],
  
      pm:["12:00 PM",
        "1:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",]
      }
  },
  {
    nombre:"GranjaMillonaria",
    horas:{
      am:["9:00 AM",
        "10:00 AM",
        "11:00 AM"],
  
      pm:["12:00 PM",
        "1:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",]
      }
  },
  {
    nombre:"GuacharoActivo",
    horas:{
      am:["9:00 AM",
        "10:00 AM",
        "11:00 AM"],
  
      pm:["12:00 PM",
        "1:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",]
      }
  }
]
const ListLotery =()=>{
    const {darkMode,lotery,nameLotery,setNameLotery,setTime}=useContext(UserContext)
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
        maxHeight: 180,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {
      Lotery?.map((item,sectionId) => (
        <li
        onClick={()=>{
          setNameLotery(item.nombre);
          setTime(item.horas)
        }}
        style={{
            display:"flex",
            alignItems:"flex-start $",
            paddingLeft:"15px",
         // borderBottom:`solid 1px ${darkMode===true?"rgb(100,100,100)":"rgb(200,200,200)"}`,
            backgroundColor: nameLotery===item.nombre?"rgba(0,140,255,0.45)":"rgba(0,100,255,0)",
            cursor:"pointer",
            userSelect:" none",
            borderRadius:"8px",
            marginTop:"5px"
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