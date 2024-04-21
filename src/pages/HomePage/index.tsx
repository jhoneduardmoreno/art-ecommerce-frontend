import { Advertisement } from "../../components/Advertisement";
import { Menu } from "../../components/Menu";
import Slider from "../../components/Slider";
import styles from './Homepage.module.scss';

const HomePage = () => {
    return (
        <>
            <Advertisement />
            <div className={styles.menuAndSliderContainer}>
                <Menu />
                <Slider />
            </div>
        </>
    );
}

export default HomePage;