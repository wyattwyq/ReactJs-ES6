import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {


    render() {

        {
            // let a = 10;
            // var b = 1;
            // console.log(a);
            // console.log(b);
            //
            // for (let i=0;i<10;i++){
            //     document.write(i);
            // }
            // console.log(i);
            // // document.write(<br />);
            // for (var i=0;i<10;i++){
            //     document.write(i);
            // }
            // console.log(i);

            /*---------------------*/
            var a=[]
            for (let i=0;i<10;i++){
                a[i]=function () {
                    console.log(i);
                }
            }
            a[6]();


        }


        return (
            <div>
                <h1>Test!!!</h1>

            </div>
        );

    }

}

ReactDOM.render(
    <Root/>, document.getElementById('MainContainer'));