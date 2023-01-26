const MyClock = () => {
    return (
        <div>
            현재 시간 : {new Date().toLocaleTimeString()}
        </div>
    );
}

export default MyClock;