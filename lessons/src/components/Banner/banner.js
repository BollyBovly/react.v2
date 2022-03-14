

const getConnection = () => true;

export const Banners = () => {
    const isConnected = getConnection();

    if (isConnected) {
        return null;
    }

    return <div/>
}

export const Warnings = () => {
    const isConnected = getConnection();

    if (isConnected) {
        return null;
    }

    return <span/>
}

export const ButtonWithNetwork = () => {
    const isConnected = getConnection();

    if (isConnected) {
        return null;
    }

    return <button/>
}

export const SharedNetworkData = ({ render }) => {
    const isConnected = getConnection();

    if (isConnected) {
        return null;
    }

    return render(isConnected)
}

export const Banner = () => {
    return <SharedNetworkData render={(isConnected) => { 
        if(!isConnected) {
            return null;
        }

        return <div/>
    }}/>
}

export const BannerWithNetwork = () => {
    return <SharedNetworkData render={(isConnected) => { 
        if(!isConnected) {
            return <button disabled={true}>Not Connected</button>;
        }

        return <button >Press me pls</button>
    }}/>
}