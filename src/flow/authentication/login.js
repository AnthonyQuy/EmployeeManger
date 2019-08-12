import React from "react";
import { connect } from "react-redux";
import { AntButton } from "../../components/common/AntButton";
import { AntViewGroup } from "../../components/common/AntViewGroup";
import { AntView } from "../../components/common/AntView";
import { Input } from "react-native-elements";
import { onEmailChange, onPasswordChange, login } from "../../actions";
import { AntError } from "../../components/common/AntError";
class LoginForm extends React.Component {
  render() {
    // console.log("LOGIN-FORM");
    // console.log(this.props);
    var { credential } = this.props;
    credential.email = "test@test.com";
    credential.password = "123qwe"
    return (
      <AntViewGroup>
        <AntView>
          <Input
            label={"Email"}
            placeholder={"user@email.com"}
            value={credential.email}
            autoCapitalize={"none"}
            onChangeText={text => {
              this.props.onEmailChange(text);
            }}
          />
        </AntView>
        <AntView>
          <Input
            label={"Password"}
            placeholder={"Password"}
            value={credential.password}
            onChangeText={text => {
              this.props.onPasswordChange(text);
            }}
            secureTextEntry={true}
          />
        </AntView>
        <AntError errMessage={this.props.credential.errorMessage} />
        <AntButton
          loading={this.props.loading}
          disabled={this.props.loading}
          title={"Login"}
          onPress={() => this.props.login(credential)}
        />
      </AntViewGroup>
    );
  }
}
function mapStateToProps(state) {
  // console.log("MAP")
  // console.log(state)
  return { credential: state.credential, loading: state.common.loading };
}
export default connect(
  mapStateToProps,
  { onEmailChange, onPasswordChange, login }
)(LoginForm);
