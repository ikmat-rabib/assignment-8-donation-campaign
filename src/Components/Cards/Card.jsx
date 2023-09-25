

const Card = ({ card }) => {

    const { id, picture, title, category, text_and_button_bg_color, card_bg_color, category_bg_color } = card

    const cardStyle = {
        backgroundColor: card_bg_color,
    };
    const categoryStyle = {
        backgroundColor: category_bg_color,
    }
    // const buttonStyle = {
    //     color: text_and_button_bg_color,
    //     backgroundColor: ,
    // };
    const titleStyle = {
        color: text_and_button_bg_color,
    };

    return (
        <div>
            <div className="card w-[312px] bg-base-100 shadow-xl " style={cardStyle}>
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">
                    <div className="px-2 rounded-md max-w-min" style={categoryStyle}>
                        <p style={titleStyle}>{category}</p>
                    </div>
                    <h2 className="card-title " style={titleStyle}>
                        {title}
                    </h2>

                </div>
            </div>
        </div>
    );
};

export default Card;