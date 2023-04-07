
import Messages from './Messages';
import Navbar from './ChatFeedNavbar';
import TypingArea from './TypingArea';

const ChatFeed = () => {

    return (
        <div className='chat-feed'>
            <Navbar />
            <Messages />
            <TypingArea />
        </div>
    );
};

export default ChatFeed;