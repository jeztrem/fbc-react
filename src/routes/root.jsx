import { Outlet } from "react-router-dom";
export default function Root() {
    return (
        <>
            <div class="container d-flex align-items-center justify-content-center fs-2">
                <p>FELLOWSHIP BIBLE CHURCH</p>
            </div>
            <header>
                <div class="container d-flex align-items-center justify-content-center fs-6">
                    <nav>
                        <span class="mx-2"><a  href={`/`}>Home</a></span>
                        <span class="mx-2"><a href={`/missions`}>Missions</a></span>
                        <span class="mx-2"><a href={`/beliefs`}>Beliefs</a></span>
                        <span class="mx-2"><a href={`/contact`}>Contact</a></span>
                        <span class="mx-2"><a href="https://live.fbcmn.org/">Sermons</a></span>
                    </nav>
                </div>
            </header>

            <div class="container-xxl">
                <hr class="text-secondary mt-0" />
            </div>
            <div class="container d-flex align-items-center justify-content-center fs-2">
                <Outlet/>
            </div>
        </>
    );
}