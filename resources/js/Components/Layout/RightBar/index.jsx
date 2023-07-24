import CardTopUser from "@/Components/Layout/RightBar/CardTopUser.jsx";
import {CreateWidgetCard} from "@/Components/Molecules/index.jsx";

export default function Index({topUser}) {

    return (
        <>
            <CreateWidgetCard icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className=" h-10 w-10 mr-3.5 ml-1 text-orange fill-current bi bi-pencil-square"
                     viewBox="0 0 16 16">
                    <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            }
                              // buttonAction={() => alert.log("asdas")}}
                              buttonAction={() =>  window.location.href = route('posts.create')}
                              buttonTitle={" Buat Post Sekarang"}
                              description={"Bagikan petualangan seru mu yang tak terlupakanmu"}

                              title={"Buat Post"}
            />


            <CardTopUser topUser={topUser}/>
            <Footer/>

        </>
    )
}


function Footer() {
    return (
        <div>
            <span className="ml-2 font-medium text-xs pr-5 text-gray-400">Kebijakan Privasi</span>
            <span className="font-medium text-xs pr-5 text-gray-400">Syarat & Ketentuan</span>
            <br/>
            <a>
                <span className="ml-2 font-medium text-xs pr-5 text-gray-400">Hubungi Kami</span>
            </a>
            <a>
                <span className="font-medium text-xs pr-5 text-gray-400">Disclaimer</span>
            </a>
            <br/>
            <p className=" ml-3 mt-3 text-sm font-semibold text-gray-400 uppercase">© 2023 indoinsights</p>
        </div>

    )
}


