/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
function Login() {
    const Container = styled.div`
        @media (min-width: 768px) {
            float: right;
            box-shadow: 0px 10px 40px 0px #00000029;            ;
            margin-top: 2%;
            margin-right: 2%;
        }
        size: 100%;
        min-width: 55%;
        min-height: 80%;
        `;
    const Heading = styled.h1`
        font-size: 3em;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        font-weight: 700;
        @media (min-width: 768px) {
            padding-top: 15%;
        }
        `;
    const Divi = styled.div`
        padding-left: 10%;
        padding-right: 10%;
        margin: 4px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        `;
    const Input = styled.input`
        width: 100%;
        border: 1px solid #04072F66;
        border-radius: 4px;
        padding: 12px 10px;
        margin: 5px 0;
        box-sizing: border-box;
        `;

    const Button = styled.input`
        width: 60%;
        background-color: #1575A7;;
        color: white;
        font-size: 1em;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        padding: 14px 20px;
        margin-top: 7%;
        border: none;
        margin-left: 20%;
        border-radius: 8px;
        `;
    const Span = styled.span`
        display: flex;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        margin-top: 3%;
        margin-bottom: 10%;
        `;
    const Div = styled.div`
        margin-top: 10px;
        margin-bottom: 15px;
        `;
    const A = styled.a`
        color: #F78719;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        float: right;
        margin-right: 10%;
        `;
    return (
        <Container>
            <div className="login">
                <Heading>Login</Heading>
                <form style={{padding:5}}>
                    <Div>
                    <Divi>
                    <label for="LoginId">Login Id</label>
                    </Divi>
                    <Divi>
                    <Input name="LoginId" placeholder="Enter Login ID" style={{width:'100%'}}/>
                    </Divi>
                    </Div>
                    <Div>
                    <Divi>
                    <label for="password">Password</label>
                    </Divi>
                    <Divi>
                    <Input type="password" name="password" placeholder="Enter Password" style={{width:'100%'}}/>
                    </Divi>
                    </Div>
                    <A href='#'>Change Password</A>
                    <Divi>
                    <input type="checkbox" name="remember"/>
                    <label for="remember" style={{color:'#737B86'}}>Remember me</label>
                    </Divi>
                    <Divi>
                    <input type="checkbox" name="terms" />
                    <label for="terms" style={{color:'#737B86'}}>Agree to <a href='#' style={{color:'#F78719'}}>Terms and Conditions</a></label>
                    </Divi>
                    <Divi>
                    <Button type="submit" value="Log in" />
                    </Divi>
                    <Divi>
                    <Span>Don't have an account?<a href='#' style={{color:'#F78719'}}>Register Here</a></Span>
                    </Divi>
                </form>
            </div>
        </Container>

    );
}

export default Login;