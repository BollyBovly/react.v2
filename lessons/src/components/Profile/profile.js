import { useContext } from 'react'
import { ThemeContext } from '../utils/themeContext';
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeName, changeShowName } from '../../Store/profile/action';
import { Forma } from '../Forma/forma';
import { selectName, selectShowName } from '../../Store/profile/selectors';


export const Profile = () => {
    const { setMessageColor } = useContext(ThemeContext);
  
    const dispatch = useDispatch();
    const showName = useSelector(selectShowName, shallowEqual);
    const name = useSelector(selectName);
  
    const handleChangeShowName = () => {
      dispatch(changeShowName);
    };
  
    const handleClick = () => {
      setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
    };
  
    const handleChangeName = (text) => {
      dispatch(changeName(text));
    };
  
    return (
      <>
        <h3>Profile</h3>
        <div>
          <button onClick={handleClick}>Change theme</button>
        </div>
        <div>
          {showName && <span>{name}</span>}
          <input type="checkbox" />
          <button onClick={handleChangeShowName}>Change show name</button>
        </div>
        <Forma onSubmit={handleChangeName} />
      </>
    );
  };

export const ProfileToConnect = ({ showName, name, setShowName, setName }) => {
    const { setMessageColor } = useContext(ThemeContext)

    const handleChangeShowName = () => {
        setShowName();
    }
    const handleClickTheme = () => {
        setMessageColor((prevtColor) => (prevtColor === 'red' ? 'blue' : 'red'));
    }

    const handleChangeName = (text) => {
        setName(text);
    }

    return (
        <>
            <h2>Profile</h2>
            <div>
                <button onClick={handleClickTheme}>Change</button>
            </div>
            <div>
                {showName && <span>{name}</span>}
                <button onClick={handleChangeShowName}>Change show name</button>
            </div>
            <Forma onSubmit={handleChangeName}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    showName: selectShowName(state),
    name: selectName(state),
})

const mapDispatchToProps = {
    setShowName: () => changeShowName,
    setName: changeName,
}

const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(ProfileToConnect);
export default ConnectedProfile;