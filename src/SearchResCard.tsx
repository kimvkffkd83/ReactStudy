import SnackType from "./type/SnackType";
import {Card, Button, ButtonGroup} from "react-bootstrap";

function SearchResCard({item}:{item:SnackType}){
    return(
        <>
            <Card style={{ width: '18rem' }}>
                 <Card.Img></Card.Img>
                <Card.Body>
                    <Card.Title>{item.snk_name}</Card.Title>
                    <Card.Text>
                        1회 제공량 : {item.snk_potion}g<br/>
                        칼로리: {item.snk_calorie}(㎈)
                    </Card.Text>
                    <ButtonGroup>
                        <Button> 더 알아보기 </Button>
                        <Button> 좋아요 </Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </>
    )
}
export default SearchResCard;
