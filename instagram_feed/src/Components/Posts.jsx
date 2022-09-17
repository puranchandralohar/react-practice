import React, { Component } from 'react';
import { Buttons } from './Buttons';
import "./Style.css";

export class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            db:[{
                profileImg:"Assets/Professor.jpg",
                userName:"Professor",
                post:"",
            },
            {
                profileImg:"Assets/Tokyo.jpg",
                userName:"Tokyo",
                post:"",
            },
            {
                profileImg:"Assets/Berlin.jpeg",
                userName:"berlin",
                post:"",
            },
            {
                profileImg:"Assets/denver.jpeg",
                userName:"Denver",
                post:"",
            },
            {
                profileImg:"Assets/Nairobi.jpg",
                userName:"Nairobi",
                post:"",
            },
            {
                profileImg:"Assets/rio.jpg",
                userName:"Rio",
                post:"",
            },
            {
                profileImg:"Assets/monica.jpg",
                userName:"Monica",
                post:"",
            },
            {
                profileImg:"Assets/lisbon.jpg",
                userName:"Lisbon",
                post:"",
            },
            {
                profileImg:"Assets/moscow.jpeg",
                userName:"Moscow",
                post:"",
            }
        ]
        };
    };
  render() {
    return (
    <>
       {
        this.state.db.map((item)=>{
        return(
            <div className='wrapper'>
                <div className='container'>
                    <div className='postHead'>
                            <img src={item.profileImg} alt=""/>
                            <h3>{item.userName}</h3>                                             
                    </div>
                    <div className='post'>
                        <img src={item.profileImg} alt=""/>
                    </div>
                    <Buttons />

                </div>
            </div>

        )

        })
        }
    </>
    )
  }
}
