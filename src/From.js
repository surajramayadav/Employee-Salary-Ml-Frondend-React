import React from 'react'
import axios from 'axios';
export default function From() {
    const [exp, setexp] = React.useState(0)
    const [res, setres] = React.useState(0)
    const HandlePredict = () => {
        try {
            axios.get(`http://localhost:4000/predict?exp=${exp}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Accept': 'application/json',
                }

            })
                .then(res => {
                    console.log(res)
                    setres(res.data.result)
                    console.log(res.data.result)


                })


        } catch (e) {
            console.log(e)
        }

    }
    return (
        <div class="container">
            <center>
                <br />
                <br />
                <div className="card w-100" >
                    <div class="card-header text-black">
                        <strong>Counting Salary Based on Experience <span style={{ color: 'red' }}>{res !== 0 && res}</span> </strong>
                    </div>
                    <div className="card-body">


                        <div class="form-group">

                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Experience"
                                onChange={e => setexp(e.target.value)}
                                value={exp} />
                        </div>


                        <div class="form-group">
                            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={() => HandlePredict()}>Get Salary</button> </div>

                    </div>
                </div>
            </center>
        </div>
    )
}
