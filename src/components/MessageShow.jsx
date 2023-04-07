

export const MyMessage = ({ message, user }) => {
    const image = user.pp ? <img src={user.pp} alt='' className='img' />
        : <div className='img'>{user.displayName.slice(0, 2).toUpperCase()}</div>;
    return (
        <div className='my-message'>
            <div className='last-message-n-time'>
                <p>{message.message}</p>
                <span className='time'>{new Date(message.createdOn).toDateString()}</span>
            </div>
            <div className='image'>{image}</div>
        </div>
    );
};

export const TheirMessage = ({ message, user }) => {
    const image = user.pp ? <img src={user.pp} alt='' className='img' />
        : <div className='img'>{user.displayName.slice(0, 2).toUpperCase()}</div>;
    return (
        <div className='their-message'>
            <div className='image'>{image}</div>
            <div className='message-n-time'>
                <p className='message'>{message.message}</p>
                <span className='time'>{new Date(message.createdOn).toDateString()}</span>
            </div>
        </div>
    );
};
