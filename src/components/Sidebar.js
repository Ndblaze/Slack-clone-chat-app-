import React from 'react'
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItems } from '../Data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import db from '../Firebase'
import {useHistory} from 'react-router-dom'

const Sidebar = ({rooms}) => {
    const history = useHistory();

    const goToChannel = (id) => {
        history.push(`/room/${id}`)
    }

    const addChannel = () => {
         const promptName = prompt('Enter channel name');
         if(promptName){
             db.collection('rooms').add({
                 name: promptName
             })
         }
    }

    return (
        <Container>
            <WorkspaceContainer>
                 <Name>
                     CleverProgrammer
                 </Name>
                 <NewMessage>
                     <AddCircleOutlineIcon />
                 </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItems.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelsContainer>
                    <div>
                        Channels
                    </div>
                     <AddIcon onClick = {addChannel} />
                </NewChannelsContainer>
 
                <ChannelsList>
                    { 
                       rooms.map(item => (
                          <Channel onClick={() => goToChannel(item.id)}>
                               # {item.name}
                          </Channel>
                       ))
                    }
            </ChannelsList>
            </ChannelsContainer>

        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #3f0e40;
    
`
const WorkspaceContainer = styled.div`
    color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`
const Name = styled.div`
    
`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: #fff;
    color: #3f0e40;
    fill: #3f0e40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`
  padding-top: 20px;
    
`
const MainChannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;

    :hover{
         background: #350d36;
     }
`

const ChannelsContainer = styled.div`
      color: rgb(188, 171, 188);
      margin-top: 10px;
`

const NewChannelsContainer = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     height: 28px;
     padding-left: 19px;
     padding-right: 12px;
`
const ChannelsList = styled.div`
     

`
 const Channel = styled.div`
     height: 28px;
     display: flex;
     align-items: center;
     padding-left: 19px;
     cursor: pointer;

     :hover{
         background: #350d36;
     }
     
`

