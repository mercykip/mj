import React ,{Component} from 'react';
import {Link } from "react-router-dom";
import { Card,CardTitle,CardText,CardActions,Button,Cell,Grid,ProgressBar,ListItem,List} from 'react-mdl';

class Django extends Component{
    render(){
        return(
            <div class="about-django">
                 <Grid className="about-grid">
                     <Cell col={3}>
                     <h4>Topics Covered</h4> 
                     <p className="tableofcontent">
                    
                         <a href="#introduction">Introduction</a><br/>
                         <a href="#djangofiles">Django Folder Structur</a><br/>
                         <a href="#application">Creating custom Django app</a><br/>
                         <a href="#superuser">Creating superuser</a><br/>
                         <a href="#databaseupdate">Database Update</a><br/>
                         <a href="#pythonshell">Python Shell</a><br/>
                         <a href="#recarp">Recarp on models</a><br/>
                         <a href="#datatypes">Form fields</a><br/>
                         <a href="#fieldclasses">Built-in Field classes</a><br/>
                         <a href="#view">Creating View</a><br/>
                     </p>
                     </Cell>
                 <Cell col={9}>
                     <div>
                     <h4  id='introduction'>DJANGO DOCUMENTATION</h4>
                     <p>
                       <b>Django</b> is a high-level Python Web framework that encourages rapid
                        development and clean pragmatic design.
                        It's primary goal is to ease the creation of complex database-driven
                         websites.
                     </p>
                     <h5  id='djangofiles'>Understanding django Folder
                      Structure</h5>
                     <p>Important files in django</p>
                     <ul>
                         <li><b>manage.py</b></li>
                         <p>A command-line utility for executing Django commands from within
                              your project.</p>
                          <li><b>db.sqlite3. </b></li>
                          <p> The database created when you ran the migrate command </p>
                          <li><b>__init__.py  </b></li>
                          <p> This file tells Python that this folder (your Django app)
                               is a Python package. </p>
                            <li><b>asgi.py </b></li>
                          <p>  enables ASGI compatible web servers to serve your project (Django 3 only). </p>
                          <li><b>urls.py</b></li>
                          <p>  contains project-level URL configurations. By default, this contains a 
                              single URL pattern for the admin. </p>
                        <li><b>wsgi.py  </b></li>
                          <p> enables WSGI compatible web servers to serve your project.</p>
                          <li><b>settings.py </b></li>
                          <p> it contains the settings for your Django project. .</p>
                     </ul>
                     </div>
                     <h5 id='superuser'>Create a superuser</h5>
                     <p><b>SuperUser</b> is the most powerful user with permissions to create, read,
                      update and delete data in the Django admin, which includes model records and 
                      other users. staff. - A user marked as staff can access the Django admin.</p>
                      <p>Important commands in django</p>
                     <ul>
                         <li><b>python manage.py migrate</b></li>
                         <p>It sync settings with the django project, can also be used to create a new database<br/>
                         in settings.py file change the sqlite database name and run the command to create a new database
                         </p>
                         <li><b>python manage.py runserver</b></li>
                         <p>This command is used to start/run the server</p>
                         <li><b>python manage.py createsuperuser</b></li>
                         <p>It allows you to create a user with access to the admin: altimate super user<br/>
                         This command promts you to enter your username, email(optional) and
                          password(doen't have to be secure).
                          The details will be used during login to the admin site.<br/>
                          To access the admin site: run the server, add admin to the default server url example
                          <b> localhost:8000/admin</b>

                          <br/>
                          You can perform any CRUD operation in the admin site
                         </p>
                     </ul>
                     <h5 id='application'>Create custom django App</h5>
                     <p><b>Django application</b> is a Python package that is
                      specifically intended for use in a Django project. An application may use
                      common Django conventions, such as having models , tests , urls , and views submodules.</p>
                       <ul>
                           <li><b>python manage.py startapp account</b></li>
                           <p>command to create an application, account is the name of the application.
                           <br/>
                           Add fields to the model of the application 
                         <p> Create a class with the same name as the model example <b>class Account(models.Model):
                             </b> and add the application to the settings</p> </p>
                             </ul>
                             <p>
                          <h5  id='databaseupdate'>Commands to update the database</h5>
                           <ul>
                           <li><b>python manage.py makemigrations</b></li>
                           <li><b>python manage.py migrate</b></li>
                           <p>Run this two commands everytime you are making 
                               changes models.py file or updating the database</p>
                           <li><b>Registering a Model</b></li>
                           <p>Models are registered in admin.py file in which is in the same directory </p>
                           <p><i>Relative import is importing documents from the same directory</i>
                           <br/>from .models import Account
                           <br/>admin.site.register(Account)
                           </p>
                           </ul>
                           </p>
                     <p>
                       <h5 id='pythonshell'>Using Python Shell</h5>
                       To open the python shell run: <b>python manage.py shell</b>. 
                       This command allows us to save/create an account
                       <ol>
                           <li>import classes</li>
                           from .models import Account
                           <li>view items(accounts) created/saved in the Database</li>
                           Account.objects.all()
                           <li>Create account in the shell</li>
                           Account.objects.create(name='saving',description='saving account')
                           <br/><i>The name and description fields are declared in the models.py</i>
                           <br/><i>if you click enter multiple times, the
                                same account will be created that number of times</i>
                       </ol>
                       </p>
                       <p>
                       <h5 id="recarp">Starting over and adding new fields</h5>
                       <ol>
                           <li>delete all files in the migration folder  exept init</li>
                           <li>delete pycache folder inside migration</li>
                           <li>delete mysqlite database </li>
                           add fields with their correct field types refer to <a href="https://docs.djangoproject.com/en/3.1/ref/forms/fields/">Django datatypes</a>
                      <li>update the database</li>
                      <li>create superuser</li>
                      <li>Navigate to admin site to view the different fields layout
                          <ul>
                              <li>models.CharField(max_length=120)#max_length=required</li>
                              <li>models.TextField(blank=True,null=True)</li>
                              <li>models.FloatField()</li>
                              <li> models.TextField(default='this is cool')</li>
                          </ul>
                      </li>
                       </ol>
                       </p>
                       <p>
                       <h5 id="datatypes">Form fields in Django</h5>
                       Form fields, before using a form field in the shell import forms from django<br/>
                     <b>from django import forms</b> 
                       <ol>
                           <li>Field.clean(value)</li>
                           Each Field instance has a clean() method, which takes a single argument 
                           and either raises a django.core.exceptions.ValidationError exception or returns the clean value.
                           example <b>f = forms.CharField()</b><br/>
                                      <b>f.clean('foo')</b>
                           <li>Field.required</li>
                             By default, each Field class assumes the value is required, so if you pass an empty value – either
                            None or the empty string ("") – then clean() will raise a ValidationError exception.<br/>
                            To specify that a field is not required, pass required=False to the Field constructor.
                             example <b> f = forms.CharField(required=False)</b>
                            <li>Field.label</li>
                            The label argument lets you specify the “human-friendly” label for this field.
                             This is used when the Field is displayed in a Form. It is passed to the field constructor.
                              example  <b> name = forms.CharField(label='Your name')</b>
                             <li>label_suffix</li>
                             The label_suffix argument lets you override the form’s label_suffix on a per-field basis.
                             example
                             <b>captcha_answer = forms.IntegerField(label='2 + 2', label_suffix=' =')</b><br/>
                             <b>f = ContactForm(label_suffix='?')</b><br/>
                             <li>Field.initial</li>
                             The initial argument lets you specify the initial value to use when 
                             rendering this Field in an unbound Form.
                             <b> name = forms.CharField(initial='Your name')</b><br/>
                             <b>url = forms.URLField(initial='http://')</b><br/>
                             <li>Field.help_text</li>
                             The help_text argument lets you specify descriptive text for this Field.<br/>
                             <b> subject = forms.CharField(max_length=100, help_text='100 characters max.')</b>
                            <li>Field.error_messages</li>
                            The error_messages argument lets you override the default messages that the field will raise.
                            <b>name = forms.CharField(error_messages={"'required' : 'Please enter your name'"})</b><br/>
                            <b>name.clean('')</b>
                       </ol>
                       </p>
                       <p>
                       <h5 id="fieldclasses">Built-in Field classes</h5>
                       <ol>
                           <li>BooleanField</li>
                           Default widget: CheckboxInput<br/>
                           Normalizes to: A Python True or False value.<br/>
                           Empty value: False<br/>
                           Validates that the value is True (e.g. the check box is checked) if the field has required=True.<br/>
                           Error message keys: required
                           <li>CharField</li>
                           Default widget: TextInput<br/>
                           Empty value: Whatever you’ve given as empty_value.<br/>
                           Error message keys: required, max_length, min_length<br/>
                           Normalizes to: A string<br/>
                           Uses MaxLengthValidator and MinLengthValidator if max_length 
                           and min_length are provided. Otherwise, all inputs are valid.
                           <li>ChoiceField</li>
                           Default widget: Select<br/>
                           Empty value: '' (an empty string)<br/>
                           Validates that the given value exists in the list of choices.<br/>
                           Normalizes to: A string.<br/>
                           Validates that the given value exists in the list of choices.<br/>
                           Error message keys: required, invalid_choice<br/>
                           <li>TypedChoiceField</li>
                           Just like a ChoiceField, except TypedChoiceField takes two extra arguments, coerce and empty_value.
                           <br/> Default widget: Select<br/>
                           Empty value: Whatever you’ve given as empty_value.<br/>
                           Normalizes to: A value of the type provided by the coerce argument.<br/>
                           Validates that the given value exists in the list of choices and can be coerced.
                           Error message keys: required, invalid_choice
                           <li>DateField</li>
                           Default widget: DateInput<br/>
                           Empty value: None<br/>
                           Normalizes to: A Python datetime.date object.<br/>
                           <br/>Validates that the given value is either a datetime.date, datetime.datetime or string formatted in a particular date format.
                           <br/>Error message keys: required, invalid
                           <li>DateTimeField</li>
                           Default widget: DateTimeInput<br/>
                           Empty value: None<br/>
                           Normalizes to: A Python datetime.datetime object.<br/>
                           Validates that the given value is either a datetime.datetime, 
                           datetime.date or string formatted in a particular datetime format.<br/>
                           Error message keys: required, invalid<br/>
                           <li>DecimalField</li>
                           Default widget: NumberInput when Field.localize is False, else TextInput<br/>
                           Empty value: None<br/>
                           Normalizes to: A Python decimal.<br/>
                           Validates that the given value is a decimal. Uses MaxValueValidator and MinValueValidator
                            if max_value and min_value are provided. Leading and trailing whitespace is ignored.<br/>
                            Error message keys: required, invalid, max_value, min_value, max_digits, max_decimal_places,
                             max_whole_digits.<br/>
                             <li>DurationField</li>
                             Default widget: TextInput<br/>
                             Empty value: None<br/>
                             Normalizes to: A Python timedelta.<br/>
                             Error message keys: required, invalid, overflow.<br/>
                             Validates that the given value is a string which can be converted into a timedelta. <br/>
                             The value must be between datetime.timedelta.min and datetime.timedelta.max.
                            <li>URLField</li>
                            Default widget: URLInput<br/>
                            Empty value: '' (an empty string)<br/>
                            Normalizes to: A string.<br/>
                            Uses URLValidator to validate that the given value is a valid URL.<br/>
                            Error message keys: required, invalid
                            <li>IntegerField</li>
                            Default widget: NumberInput when Field.localize is False, else TextInput.<br/>
                            Empty value: None<br/>
                            Normalizes to: A Python integer.<br/>
                            Error message keys: required, invalid, max_value, min_value<br/>
                            Validates that the given value is an integer. Uses MaxValueValidator and
                             MinValueValidator if max_value and min_value are provided. Leading and 
                             trailing whitespace is allowed, as in Python’s int() function.<br/>
                             <li>ImageField</li>
                             Default widget: ClearableFileInput<br/>
                             Empty value: None<br/>
                             Normalizes to: An UploadedFile object that wraps 
                             the file content and file name into a single object.<br/>
                             Error message keys: required, invalid, missing, empty, invalid_image<br/>
                             Validates that file data has been bound to the form. Also uses 
                             FileExtensionValidator to validate that the file extension is supported by Pillow.<br/>
                            <li>FloatField</li>
                            Default widget: NumberInput when Field.localize is False, else TextInput.<br/>
                            Empty value: <br/>
                            Normalizes to: A Python float.<br/>
                            Error message keys: required, invalid, max_value, min_value<br/>
                            Validates that the given value is a float. Uses MaxValueValidator and 
                            MinValueValidator if max_value and min_value are provided. Leading 
                            and trailing whitespace is allowed, as in Python’s float() function.
                            <li>EmailField</li>
                            Default widget: EmailInput<br/>
                            Empty value: '' (an empty string)<br/>
                            Normalizes to: A string.<br/>
                            Error message keys: required, invalid<br/>
                            Uses EmailValidator to validate that<br/>
                             the given value is a valid email address, using a moderately complex regular expression.
                            
                       </ol>
                       <a href="https://github.com/mercykip/DjangoDay1/blob/master/accounts/models.py">Field classes example</a>
                       </p>
                       <p>
                       <h5 id="view">Creating views</h5>
                       Create an application for the views and add it to settings.py<br/>
                       inside view.py you create the view for handling the web pages.
                       </p>

                 </Cell>
                 </Grid>    
            </div>
        );
        } 
}
export default Django;