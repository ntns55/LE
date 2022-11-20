import { Typography, Button } from "@mui/material";
import { Container, Col, Row } from "react-bootstrap";

function Morning(props) {
  const { variables } = props;
  console.log(variables);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <Container>
      <Typography className="my-3">
        You wake up in your dorm, ready for a new day. This is day number{" "}
        {variables.day + 1} at this weird school. You are ready to look around
        the school, however, what should you look into first?
      </Typography>
      <Row>
        <Col>
          <Button
            fullWidth
            size="large"
            variant="contained"
            className="my-3"
            disabled={variables.cosplay > 1}
            onClick={() => {
              props.cosplay();
            }}
          >
            Look for cosplay opportunities
          </Button>
        </Col>
        <Col>
          <Button
            fullWidth
            size="large"
            variant="contained"
            className="my-3"
            onClick={() => {
              props.sick();
            }}
            disabled={variables.sick > 1}
          >
            Skip class by pretending to be sick
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            fullWidth
            size="large"
            disabled={variables.bimbo > 2}
            variant="contained"
            className="my-3"
            onClick={() => {
              props.bimbo();
            }}
          >
            Look for opportunities to act slutty
          </Button>
        </Col>
        <Col>
          <Button
            fullWidth
            size="large"
            variant="contained"
            className="my-3"
            onClick={() => {
              props.therapist();
            }}
            disabled={variables.hypno > 1}
          >
            Visit the therapist
          </Button>
        </Col>
        <Col>
          <Button
            fullWidth
            size="large"
            variant="contained"
            className="my-3"
            onClick={() => {
              props.wetvalley();
            }}
            disabled={variables.wetvalleyOp > 2}
          >
            Improve relationship with Miss Wetvalley
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            fullWidth
            size="large"
            variant="contained"
            className="my-3"
            onClick={() => {
              props.abby();
            }}
            disabled={variables.abby > 0}
          >
            Hang out with Abby
          </Button>
        </Col>
        <Col>
          <Button
            fullWidth
            size="large"
            variant="contained"
            className="my-3"
            disabled
            onClick={() => {
              props.poppy();
            }}
          >
            Hang out with Poppy
          </Button>
        </Col>
        <Col>
          <Button
            fullWidth
            size="large"
            variant="contained"
            className="my-3"
            disabled
            onClick={() => {
              props.mary();
            }}
          >
            Hang out with Mary
          </Button>
        </Col>
      </Row>
      {variables.momteacher ? (
        <Row>
          <Col>
            <Button
              fullWidth
              size="large"
              variant="contained"
              className="my-3"
              onClick={() => {
                props.headmistress();
              }}
              disabled={variables.headOp > 0}
            >
              Pay a visit to the headmistress
            </Button>
          </Col>
          <Col>
            <Button
              fullWidth
              size="large"
              variant="contained"
              className="my-3"
              disabled
              onClick={() => {
                props.guard();
              }}
            >
              Have some fun with the guard
            </Button>
          </Col>
          <Col>
            <Button
              fullWidth
              size="large"
              variant="contained"
              className="my-3"
              disabled={variables.momProg > 2}
              onClick={() => {
                props.mom();
              }}
            >
              Go see your mom
            </Button>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
}

export default Morning;
