// const PaseengerMultipleForm = useMemo(() => {
//     const forms = []
//     if (userFormInput.passengers.length) {
//         for (let index = 0; index < userFormInput.passengers.length; index++) {
//             forms.push(
//                 <>
//                     <PassengerSingleInput
//                         PreviousSelectedName={userFormInput.passengers[index].passengerName}
//                         //@ts-ignore
//                         PreviousSelectedAge={userFormInput.passengers[index].pasengerAge}
//                         PreviousSelectedGender={userFormInput.passengers[index].gender}
//                         PreviousberthPrefrence={userFormInput.passengers[index].berthpreference}
//                         PreviousselectedNation={userFormInput.passengers[index].nationality}
//                         key={index}
//                         onClose={() => handleClickAction("dec")}
//                         currentPessengerInfo={form}
//                         setForm={setForm}
//                     />
//                     <hr />
//                 </>
//             )
//         }
//     } else {
//         for (let index = 0; index < numberOfSinglePASSENGERfORM; index++) {
//             forms.push(
//                 <>
//                     <PassengerSingleInput
//                         key={index}
//                         onClose={() => handleClickAction("dec")}
//                         currentPessengerInfo={form}
//                         setForm={setForm}
//                     />
//                     <hr />
//                 </>
//             )
//         }
//     }

//     return (

//         <>
//             {forms}
//         </>

//     )

// }, [numberOfSinglePASSENGERfORM])

// console.log(singleTrain[0].trainClassandPrice[0].status)
