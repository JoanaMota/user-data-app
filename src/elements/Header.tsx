import React from 'react';
import { Segment, Header } from 'semantic-ui-react';


function Title(props: any) {
    return (
        <Header
            as='h1'
            inverted
            content={props.text}
            textAlign='center'
            style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em',
            }}
        />
    )
}
function SubTitle(props: any) {
    return (
        <Header
            as='h2'
            inverted
            content={props.text}
            textAlign='center'
            style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
            }}
        />
    )
}

function HeaderHomePage() {
    return (
        <div>
            <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 600, padding: '1em 0em' }}
                vertical
            >
                <Title text='Lets Learn Stuff' />
                <SubTitle text='Lear AWS DynamoDB requests and AWS IAM Role' />

            </Segment>
        </div>
    )
};


export default HeaderHomePage;


