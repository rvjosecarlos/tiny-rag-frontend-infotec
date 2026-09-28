export default function Modal({ children }: { children: React.ReactNode }){
    return (
        <section
            id="Modal" 
            className="top-0 right-0 bottom-0 left-0 fixed bg-zinc/5 backdrop-blur-xs z-10 flex justify-center items-center"
        >
            { children }
        </section>
        
    )
};