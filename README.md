# serveless-application-sam

[![Join the chat at https://gitter.im/Zamira-Jaupaj/serveless-application-sam](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Zamira-Jaupaj/serveless-application-sam)

![Serverelss Application ](https://raw.githubusercontent.com/zamirajaupaj/serveless-application-sam/master/architecture/architecture.png)


### AWS Account 
* For more information about 
**[AWS Account](https://aws.amazon.com/account/)**

### Configuration of AWS CLI

```
[default]
aws_access_key_id        = aaaaaaaaaaaaaaa
aws_secret_access_key    = bbbbbbbbbbbbbbb
aws_session_token        = ccccccccccccccc

```
### Quickstart for CI/CD

```
$ git clone https://github.com/zamirajaupaj/serveless-application-sam.git
$ cd serveless-application-sam
```
### You can deploy easily from your local computer using this command
```
$ sam package \
    -- template-file template.yaml \
    -- s3-bucket $BucketName \
    -- output-template-file packaged.yaml \
    -- profile $profileName \
    -- region $AwsRegion

$ sam deploy \
    -- template-file packaged.yaml \
    -- stack-name $myStack \
    -- capabilities CAPABILITY_IAM \
    -- profile $profileName \
    -- region $AwsRegiom

```
### You can upload the source code in CodeCommit 
[create Codecommit using terraform](https://github.com/zamirajaupaj/ci-cd-sam)
