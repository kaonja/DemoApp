import React, { Component } from 'react';
import update from 'react-addons-update';



class Voucher extends Component {
    constructor() {
        super(...argments);
        this.state = { 
            originalPassengers: [
                'Charlie, Farie Da Silva',
                'David Kipeta, Alphonce John'
            ],
            ticket: {
                company: 'Dalta',
                flightNo :'0234',
                departure: {
                    Airport: 'Dodoma',
                    time: '2021-01-10T10:00:00.000Z'
                },
                arrival: {
                    aiport: 'Dar Es Salaam',
                    time: '2021-01-10T11:00:00:00.000Z'
                },
                codeShare : [
                    {company:'GL',flightNo:'9840'},
                    {company: 'TM',flightNo:'5010'}
                ]

            }

         }
    }


    render() { 
        let updatedcodeShare = update(
            originalPassengers, {
                codeShare : {
                    1 : {  $set : { company: 'Fl', flightNo : '20293'} } 
                }
            }
        )
        this.setState({codeShare: updatedcodeShare })
        
        let newArrival = update(arrival, {
            0: {
                $set: {
                    aiport: 'Mwanza',
                    time : '21kdaj;akd'
                }
            }
        })

        this.setState({arrival : newArrival})
    }
}
 
export default Voucher;



