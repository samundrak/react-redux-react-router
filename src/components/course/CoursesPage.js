import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/CourseAction';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {
                title: ''
            }
        };

        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course});
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <input type="text"
                       onChange={this.onTitleChange}
                       value={this.state.course.title}
                />

                <input type="submit"
                       value="Save"
                       onClick={this.onClickSave}
                />
            </div>
        );
    }

}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses : PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

function mapActionToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}
export default connect(mapStateToProps, mapActionToProps)(CoursesPage);