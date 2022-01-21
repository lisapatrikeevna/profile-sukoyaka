import React from 'react';
import logo from '../../../assets/logo.svg'
import secondCube from '../../../assets/second_cube.svg'
import secondBook from '../../../assets/second_book.svg'
import second from '../../../assets/second.svg'
// import thirdImage from './../../../assets/third-image.svg'
import googlePlayButton from '../../../assets/google_play_button.svg'
import appleButton from '../../../assets/apple_button.svg'
import fourth from '../../../assets/fourth.svg'
import fifth from '../../../assets/fifth.svg'
import sixth from '../../../assets/sixth.svg'
import thirdImage from './../../../assets/third_image.svg'
import cl from './startPage.module.css'
import {Link} from "react-router-dom";
import Iframe from "react-iframe";
import {PATH} from "../../Routes";

const StartPage = () => {
    return <>
            <div className={`${cl.screen} ${cl.first}`}>
                <div className={cl.firstBox}>
                    <div className={cl.firstHeader}>
                        <div>
                            <img src={logo} alt="Logo"/>
                        </div>
                        <div className={cl.firstSmallButtons}>
                            {/*<Link to="https://staging.sukoyaka.games/digital-avatar/profile/register" target="_blank">*/}
                            {/*    <button className={`${cl.screenButton} ${cl.colorButton} ${cl.firstSmallButton}`}>登録</button>*/}
                            {/*</Link>*/}
                            <Link to={PATH.AUTH} target="_blank">
                                <button className={`${cl.screenButton} ${cl.greyButton} ${cl.firstSmallButton}`}>ログイン</button>
                            </Link>
                        </div>
                    </div>
                    <div className={cl.firstSubbox}>
                        <div>
                            <div className={`${cl.firstText} ${cl.gradientedText}`}>
                                <span>AR</span>
                                <span>コンテンツ</span>
                                <span>で学ぼう!</span>
                            </div>
                            <div className={cl.firstSmallText}>
                                良質のゲームは、社会性やコミュニケーション、人間関係の力を培ってくれます。画像認識とゲームを融合した、手でゲームの「駒」を動かすコンテンツを提供します。
                            </div>
                            <div className={cl.firstLargeButtons}>
                                <Link to="https://play.google.com/store/apps/developer?id=xenera+Co.,Ltd."
                                   target="_blank">
                                    <button className={`${cl.screenButton} ${cl.colorButton} ${cl.firstLargeButton}`}>ダウンロード</button>
                                    {/*<button className="screen-button color-button first-large-button">ダウンロード</button>*/}
                                </Link>
                                <Link to="#seventh_map">
                                    <button className={`${cl.screenButton} ${cl.greyButton} ${cl.firstLargeButton}`}>店舗を探す</button>
                                    {/*<button className="screen-button grey-button first-large-button">店舗を探す</button>*/}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.second}>
                <div className={`${cl.screenBox} ${cl.secondBox}`}>
                    <div className={`${cl.screenSubbox} ${cl.secondSubbox}`}>
                        <div className={`${cl.screenSubboxSubtitle} ${cl.secondSubboxSubtitle}`}>
                            concept
                        </div>
                        <div className={`${cl.screenSubboxTitle} ${cl.secondSubboxTitle} ${cl.gradientedText}`}>
                            <span>ARの力で教育</span>
                            <span>を楽しむ</span>
                        </div>
                        <div className={`${cl.screenSmallText} ${cl.secondSmallText}`}>
                      <span>
                        普通のタブレットゲームと異なり、子供は手で物を動かして、ゲームを遊ぶことで、集中力、観察力、手先の器用さを向上することができます。
                      </span>
                      <span>
                        子どもにとってよいおもちゃは、あってもなくてもよいのではなく、なくてはならない子どもの知恵の源泉なのです。
                      </span>
                        </div>
                        <div className={cl.secondIcons}>
                            <img src={secondCube} alt="Cube"/>
                            <img src={secondBook} alt="Book"/>
                        </div>
                    </div>
                    <div className={cl.secondImage}>
                        <img width="100%" height="auto" src={second}/>
                    </div>
                </div>
                <div className={`${cl.secondFooter} ${cl.gradientedText}`}>
                    コンテンツ紹介
                </div>
            </div>
            <div className={`${cl.screen} ${cl.third}`}>
                <div className={cl.screenBox}>
                    <div className={cl.thirdImage}>
                        <img width="100%" height="auto" src={thirdImage}/>
                    </div>
                    <div className={`${cl.screenSubbox} ${cl.thirdSubbox}`}>
                        <div className={cl.screenSubboxSubtitle}>
                            Sukoyaka
                        </div>
                        <div className={`${cl.screenSubboxTitle} ${cl.thirdSubboxTitle}`}>
                            Puzzle
                        </div>
                        <div className={cl.screenText}>
                            Challenge your brain with shape based puzzles
                        </div>
                        <div className={cl.screenSmallText}>
                            Using AR arrange puzzle pieces in the shape of animals to unlock each challenge. Every level
                            you clear adds an animal to your zoo gallery. Can you collect them all?
                        </div>
                        <div className={cl.appButtons}>
                            <Link to="https://play.google.com/store/apps/details?id=com.xenera.sukoyakapuzzlegame"
                               target="_blank" className="google-button">
                                <img src={googlePlayButton}/>
                            </Link>
                            <a className={cl.appleButton}>
                                <img src={appleButton}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${cl.screen} ${cl.fourth}`}>
                <div className={cl.screenBox}>
                    <div className={`${cl.screenSubbox} ${cl.fourthSubbox}`}>
                        <div className={`${cl.screenSubboxSubtitle} ${cl.fourthSubboxSubtitle}`}>
                            Sukoyaka
                        </div>
                        <div className={cl.screenSubboxTitle}>
                            SHAPE MATH
                        </div>
                        <div className={cl.screenText}>
                            Let’s learn math in AR!
                        </div>
                        <div className={cl.screenSmallText}>
                            <span>普通のタブレットゲームと異なり、子供は手で物を動かして、ゲームを遊ぶことで、集中力、観察力、手先の器用さを向上することができます。</span>
                            <span>子どもにとってよいおもちゃは、あってもなくてもよいのではなく、なくてはならない子どもの知恵の源泉なのです。</span>
                        </div>
                        <div className={cl.appButtons}>
                            <Link to="https://play.google.com/store/apps/details?id=games.sukoyaka.app.coin.supermarket"
                               target="_blank" className="google-button">
                                <img src={googlePlayButton}/>
                            </Link>
                            <span className={cl.appleButton}>
                                <img src={appleButton}/>
                            </span>
                            {/*<Link className={cl.appleButton}>*/}
                            {/*    <img src={appleButton}/>*/}
                            {/*</Link>*/}
                        </div>
                    </div>
                    <div>
                        <img width="100%" height="auto" src={fourth}/>
                    </div>
                </div>
            </div>
            <div className={`${cl.screen} ${cl.fifth}`}>
                <div className={cl.screenBox}>
                    <div className={cl.fifthImage}>
                        <img width="100%" height="auto" src={fifth}/>
                    </div>
                    <div className={`${cl.screenSubbox} ${cl.fifthSubbox}`}>
                        <div className={cl.screenSubboxSubtitle}>
                            Digital
                        </div>
                        <div className={`${cl.screenSubboxTitle} ${cl.fifthSubboxTitle}`}>
                            Avatar
                        </div>
                        <div className={cl.screenText}>
                            Create. Customize. Play. Share.
                        </div>
                        <div className={cl.screenSmallText}>
                            Create a digital avatar and customize it with unique items. Use you avatar in Sukoyaka games
                            to unlock even more customization options and share your creation with friends.
                        </div>
                        <Link to="https://staging.sukoyaka.games/digital-avatar/profile/register" target="_blank">
                            <button className={`${cl.screenButton} ${cl.colorButton} ${cl.mediumButton}`}>アカウント登録へ</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`${cl.screen} ${cl.sixth}`}>
                <div className={cl.screenBox}>
                    <div className={`${cl.screenSubbox} ${cl.sixthSubbox}`}>
                        <div className={`${cl.screenSubboxTitle} ${cl.sixthSubboxSubtitle}`}>
                            sukoyaka
                        </div>
                        <div className={`${cl.screenSubboxTitle} ${cl.sixthSubboxTitle}`}>
                            AR Stickers
                        </div>
                        <div className={cl.screenText}>
                            Collect them all!
                        </div>
                        <div className={cl.screenSmallText}>
                            Collect all the AR stickers and scan them for to view special AR content and receive prizes.
                        </div>
                        <Link to="#seventh_map">
                            <button className={`${cl.screenButton} ${cl.whiteButton} ${cl.mediumButton} ${cl.sixthButton}`}>連携店舗を探す</button>
                        </Link>
                    </div>
                    <div>
                        <img width="100%" height="auto" src={sixth}/>
                    </div>
                </div>
            </div>
            <div className={cl.seventh}>
                <div className={`${cl.seventhHeader} ${cl.gradientedText}`}>
                    連携店舗
                </div>
                <div id="seventh_map" className="seventh-map">
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12961.529979955043!2d140.0221097!3d35.692204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe8315bfa78878c02!2sAflac!5e0!3m2!1sen!2sua!4v1623161663552!5m2!1sen!2sua"
                        width="100%" height="100%" style="border:0;" allowFullScreen="" loading="lazy"/>
                </div>
                <div className={cl.seventhFooter}>
                    <div className={cl.seventhFooterBox}>
                        <div className={cl.seventhLogo}>
                            <img src={logo} alt="Logo"/>
                        </div>
                        <div className={cl.seventhFooterText}>
                            <Link to="https://xenera.jp/ja/contact" target="_blank">お問い合わせ</Link>
                            <Link to="https://xenera.jp/privacy" target="_blank">プライバシーポリシー</Link>
                            <Link to="https://xenera.jp/" target="_blank">運営会社</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

};

export default StartPage;
