const func_1 = () => {
    setTimeout(()=>{
        console.log('The first function done!!');
    }, 3000);
}

const func_2 = () =>{
    console.log('The second function done!!');
}

func_1();
func_2();