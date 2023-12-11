import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { MakeReservation, VerifyTokenMutation } from '../../../ReactQuriesAndMutations/Mutations';

function Success() {
    const { mutation } = VerifyTokenMutation();
    const { mutation: makeReservation } = MakeReservation();
    const navigate = useNavigate()

    //used useEffect cause getting infineLoop with normal flow and using <Navigate />

    useEffect(() => {
        const params = new URLSearchParams(window.location.href.split('?')[1]);
        const token = params.get('maxlinearquantam');
        if (!token) {
            return navigate("/", { replace: true })
        }
        else {
            mutation.mutate(token)
        }
    }, [])

    console.log(mutation.data?.data)
    console.log(makeReservation.data?.data)
    return (
        <div>Success</div>
    )

}

export default Success;
