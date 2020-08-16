import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadList,
} from "../store/actions";
import {
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import {Task} from "../store/reducers";
import TaskRow from "./task-row";

interface Props {
  repos: Task[],
  loadList: () => {}
};

class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.loadList();
  }

  render() {
    return (
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Stars</TableCell>
                  <TableCell align="left">URL</TableCell>
                  <TableCell align="left">Manage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.repos.map(function(row, index) {
                   return <TaskRow key={index} task={row} />
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    total_count: state.loader.total_count,
    repos: state.loader.repos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadList: bindActionCreators(loadList, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
