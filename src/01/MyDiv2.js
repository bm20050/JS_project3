
const MyDiv2 = () => {
    const myName = "강병민"
    const myGit = "https://github.com/bm20050"
    console.log(myName)
    return (
        <div>
            <p>{myName}입니다.</p>
            <p>GitHub : <a href = {myGit}>{myGit}</a></p>
        </div>
    );
}

export default MyDiv2;
