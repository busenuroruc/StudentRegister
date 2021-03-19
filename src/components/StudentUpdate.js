import React, {Component} from 'react';
import {Text, TextInput, Picker} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, CardSection, Spinner} from '../ortak';
import {studentChange, studentUpdate,studentDelete} from '../actions';

class StudentUpdate extends Component {
    state = {isim:'', soyisim:'', ogrencinumarasi:'', sube:''};
    componentDidMount(){
        const {isim, 
            soyisim, 
            ogrencinumarasi, 
            sube} = this.props.student;

            this.setState({isim, 
                soyisim, 
                ogrencinumarasi, 
                sube});
    }

    clickUpdate() {
    const {isim, 
    soyisim, 
    ogrencinumarasi, 
    sube} = this.state;
   
    this.props.studentUpdate({ isim, soyisim, ogrencinumarasi, sube, uid:this.props.student.uid });

  }
  clickDelete(){
    this.props.studentDelete({uid:this.props.student.uid});

  }
  renderButton() {
    if (!this.props.loadingUpdate) {
      return <Button onPress={this.clickUpdate.bind(this)}> UPDATE </Button>;
    }
    return <Spinner size="small" />;
  }
  renderDeleteButton() {
    if (!this.props.loadingDelete) {
      return <Button onPress={this.clickDelete.bind(this)}> DELETE </Button>;
    }
    return <Spinner size="small" />;
  }


  render() {
    console.log('gelen data', this.props.student);
    const {inputStyle} = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="İsim"
            style={inputStyle}
            value={this.state.isim}
            onChangeText={isim => this.setState({ isim })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Soyisim"
            style={inputStyle}
            value={this.state.soyisim}
            onChangeText={soyisim => this.setState({ soyisim })}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Öğrenci Numarası"
            style={inputStyle}
            value={this.state.ogrencinumarasi}
            onChangeText={ogrencinumarasi => this.setState({ ogrencinumarasi })}
          />
        </CardSection>

        <CardSection>
          <Text>Şube</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.state.sube}
            onValueChange={sube => this.setState({ sube })}
            >

            <Picker.Item label="A şubesi" value="asube" />
            <Picker.Item label="B şubesi" value="bsube" />
            <Picker.Item label="C şubesi" value="csube" />
            <Picker.Item label="D şubesi" value="dsube" />
          </Picker>
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <CardSection>
          {this.renderDeleteButton()}
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 2
  }
};
const mapToStateProps = ({studentUpdateResponse}) => {
  const {loadingUpdate, loadingDelete} = studentUpdateResponse;

  return {loadingUpdate,loadingDelete};
};
export default connect(mapToStateProps, {studentChange, studentUpdate,studentDelete})(StudentUpdate);
